import { llmsFullTxt } from '@/lib/llms';

// Regenerated daily so partner events move from upcoming to past on their own.
export const revalidate = 86400;

export function GET() {
  return new Response(llmsFullTxt(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
