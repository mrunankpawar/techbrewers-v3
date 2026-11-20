import postgres from 'postgres';
import { SCHEMA_SQL } from './db-schema';

/**
 * Postgres client. On Vercel the Neon integration sets DATABASE_URL (and
 * POSTGRES_URL); locally, put DATABASE_URL in .env.local.
 * When neither is set, isDbConfigured() is false and member features show a
 * friendly "not set up yet" state instead of failing.
 */
const url = process.env.DATABASE_URL || process.env.POSTGRES_URL || '';

export const isDbConfigured = () => url.length > 0;

type Sql = ReturnType<typeof postgres>;
const globalForDb = globalThis as unknown as { __ttSql?: Sql; __ttSchema?: Promise<void> };

function client(): Sql {
  if (!url) throw new Error('DATABASE_URL is not set');
  if (!globalForDb.__ttSql) {
    const local = /@(localhost|127\.0\.0\.1)[:/]/.test(url);
    globalForDb.__ttSql = postgres(url, {
      ssl: local ? false : 'require',
      max: 5,
      idle_timeout: 20,
      // Neon's pooled endpoint (PgBouncer, transaction mode) can't keep
      // prepared statements between transactions
      prepare: false,
    });
  }
  return globalForDb.__ttSql;
}

/** Returns the client after making sure the tables exist (once per process). */
export async function db(): Promise<Sql> {
  const sql = client();
  if (!globalForDb.__ttSchema) {
    globalForDb.__ttSchema = sql
      .unsafe(SCHEMA_SQL)
      .then(() => undefined)
      .catch((err) => {
        globalForDb.__ttSchema = undefined; // retry on the next request
        throw err;
      });
  }
  await globalForDb.__ttSchema;
  return sql;
}
