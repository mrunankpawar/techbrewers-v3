import { llmsTxt } from '@/lib/llms';

// Regenerated daily so partner events move from upcoming to past on their own.
export const revalidate = 86400;

export function GET() {
  return new Response(llmsTxt(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
