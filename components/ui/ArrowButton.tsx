import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Tone = 'ember' | 'ink' | 'paper';

const tones: Record<Tone, { btn: string; dot: string }> = {
  ember: { btn: 'bg-ember text-paper hover:bg-ember-bright', dot: 'bg-paper text-ember' },
  ink: { btn: 'bg-ink text-paper hover:bg-espresso', dot: 'bg-ember text-paper' },
  paper: { btn: 'bg-paper text-ink hover:bg-white', dot: 'bg-ember text-paper' },
};

type ArrowButtonProps = {
  href: string;
  children: React.ReactNode;
  tone?: Tone;
  external?: boolean;
  className?: string;
  'aria-label'?: string;
};

/**
 * Pill "launch" button: the arrow sits in a round port and tilts upward
 * (lift-off) on hover.
 */
export function ArrowButton({
  href,
  children,
  tone = 'ember',
  external,
  className,
  ...rest
}: ArrowButtonProps) {
  const t = tones[tone];
  const content = (
    <>
      <span>{children}</span>
      <span
        className={cn(
          'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300',
          t.dot
        )}
        aria-hidden
      >
        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-rotate-45" />
      </span>
    </>
  );

  const cls = cn(
    'group inline-flex h-12 items-center gap-3 rounded-full pl-6 pr-2 text-sm font-semibold transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2',
    t.btn,
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}
