/**
 * Database schema for member accounts. Idempotent (IF NOT EXISTS
 * everywhere): lib/db.ts runs it once per server start, so a fresh database
 * sets itself up on first use and there is no separate migration step.
 * Kept as a TS string so it ships with the serverless bundle.
 */
export const SCHEMA_SQL = `
-- TechThrusters member accounts. Idempotent: lib/db.ts runs this once per
-- server start, so a fresh database sets itself up on first use.

-- One row per signed-in member who has saved their card. user_id is the
-- Descope user id (the session token's "sub").
CREATE TABLE IF NOT EXISTS members (
  user_id           text PRIMARY KEY,
  name              text NOT NULL,
  headline          text NOT NULL DEFAULT '',
  city              text NOT NULL DEFAULT '',
  skills            text[] NOT NULL DEFAULT '{}',
  learning          text[] NOT NULL DEFAULT '{}',
  github            text NOT NULL DEFAULT '',
  linkedin          text NOT NULL DEFAULT '',
  website           text NOT NULL DEFAULT '',
  -- privacy: both off until the member opts in
  show_in_directory boolean NOT NULL DEFAULT false,
  open_to_match     boolean NOT NULL DEFAULT false,
  created_at        timestamptz NOT NULL DEFAULT now(),
  updated_at        timestamptz NOT NULL DEFAULT now()
);

-- TechThrusters-run events that members can RSVP to (partner events stay in
-- data/partnerEvents.ts and link out).
CREATE TABLE IF NOT EXISTS events (
  id          serial PRIMARY KEY,
  slug        text NOT NULL UNIQUE,
  title       text NOT NULL,
  description text NOT NULL DEFAULT '',
  starts_at   timestamptz NOT NULL,
  ends_at     timestamptz,
  -- IANA zone the event happens in; times are entered and shown in it
  timezone    text NOT NULL DEFAULT 'Asia/Kolkata',
  venue       text NOT NULL DEFAULT '',
  city        text NOT NULL DEFAULT '',
  online_url  text NOT NULL DEFAULT '',
  capacity    integer CHECK (capacity IS NULL OR capacity > 0),
  rsvp_open   boolean NOT NULL DEFAULT true,
  published   boolean NOT NULL DEFAULT true,
  created_by  text NOT NULL,
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS events_starts_at_idx ON events (starts_at);

CREATE TABLE IF NOT EXISTS rsvps (
  event_id   integer NOT NULL REFERENCES events (id) ON DELETE CASCADE,
  user_id    text NOT NULL REFERENCES members (user_id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  attended   boolean NOT NULL DEFAULT false,
  PRIMARY KEY (event_id, user_id)
);
CREATE INDEX IF NOT EXISTS rsvps_user_idx ON rsvps (user_id);

-- Badges are awarded by organizers. "attended" is tied to an event and is
-- written when an organizer marks attendance; "speaker" and "shipped" may name
-- an event and always carry a short note (talk title, project name).
CREATE TABLE IF NOT EXISTS badges (
  id         serial PRIMARY KEY,
  user_id    text NOT NULL REFERENCES members (user_id) ON DELETE CASCADE,
  kind       text NOT NULL CHECK (kind IN ('attended', 'speaker', 'shipped')),
  event_id   integer REFERENCES events (id) ON DELETE SET NULL,
  note       text NOT NULL DEFAULT '',
  url        text NOT NULL DEFAULT '',
  awarded_by text NOT NULL,
  awarded_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS badges_user_idx ON badges (user_id);
-- one Attended badge per member per event
CREATE UNIQUE INDEX IF NOT EXISTS badges_attended_once ON badges (user_id, event_id) WHERE kind = 'attended';

-- Cached AI-written intros for buddy matches (only used when an Anthropic API
-- key is configured). Keyed by the ordered pair and a hash of both profiles,
-- so an intro is rewritten when either member edits their card.
CREATE TABLE IF NOT EXISTS match_intros (
  user_a       text NOT NULL,
  user_b       text NOT NULL,
  profile_hash text NOT NULL,
  intro        text NOT NULL,
  created_at   timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_a, user_b)
);
`;
