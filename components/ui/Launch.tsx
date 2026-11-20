import Image from 'next/image';
import { Camera } from 'lucide-react';
import { cn } from '@/lib/utils';

/** Small uppercase section label above a heading. */
export function SectionLabel({
  children,
  className,
  tone = 'ember',
}: {
  children: React.ReactNode;
  className?: string;
  tone?: 'ember' | 'light';
}) {
  return (
    <p className={cn('eyebrow', tone === 'ember' ? 'text-ember' : 'text-flare', className)}>
      {children}
    </p>
  );
}

export type HeaderPhoto = { src: string; alt: string; caption: string };

/**
 * Two real event photos: a large one and a smaller one overlapping its
 * corner, captioned with the event they came from.
 */
export function PhotoStack({ photos, priority = true }: { photos: HeaderPhoto[]; priority?: boolean }) {
  const [main, second] = photos;
  return (
    <figure className="relative pb-8 pl-3 sm:pb-10 sm:pl-10">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-ink/10 bg-paper-2 shadow-[0_30px_60px_-35px_rgba(26,18,11,0.55)]">
        <Image
          src={main.src}
          alt={main.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
        />
      </div>
      {second && (
        <div className="absolute bottom-0 left-0 w-[44%] overflow-hidden rounded-xl border-[5px] border-paper bg-paper-2 shadow-[0_20px_40px_-20px_rgba(26,18,11,0.6)] sm:w-[40%]">
          <div className="relative aspect-[4/3]">
            <Image src={second.src} alt={second.alt} fill sizes="240px" className="object-cover" />
          </div>
        </div>
      )}
      <figcaption className="absolute bottom-0 right-0 flex max-w-[52%] items-start gap-1.5 text-right text-xs leading-snug text-ink/55 sm:max-w-[55%]">
        <Camera className="mt-px h-3 w-3 shrink-0" aria-hidden />
        <span>{main.caption}</span>
      </figcaption>
    </figure>
  );
}

/**
 * Shared page header for inner pages: star field, mono label, big display
 * title with an optional serif accent, intro copy and optional actions.
 */
export function PageHeader({
  label,
  title,
  accent,
  intro,
  children,
  align = 'left',
  photos,
}: {
  label: string;
  title: React.ReactNode;
  accent?: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  align?: 'left' | 'center';
  photos?: HeaderPhoto[];
}) {
  const center = align === 'center';
  return (
    <section className="relative overflow-hidden bg-paper text-ink">
      <div aria-hidden className="absolute inset-0 star-field fade-edges" />
      <div
        className={cn(
          'relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-32 md:pb-20 md:pt-40 lg:gap-16',
          photos && 'lg:grid-cols-[1.05fr_0.95fr]',
          center && !photos && 'text-center'
        )}
      >
        <div>
          <SectionLabel className={cn(center && !photos && 'justify-center')}>{label}</SectionLabel>
          <h1
            className={cn(
              'display mt-5 max-w-4xl text-5xl sm:text-6xl md:text-7xl',
              photos && 'lg:text-[4.25rem] xl:text-7xl',
              center && !photos && 'mx-auto'
            )}
          >
            {title}
            {accent && (
              <>
                {' '}
                <span className="accent text-ember">{accent}</span>
              </>
            )}
          </h1>
          {intro && (
            <p className={cn('mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl', center && !photos && 'mx-auto')}>
              {intro}
            </p>
          )}
          {children && (
            <div className={cn('mt-9 flex flex-wrap items-center gap-x-6 gap-y-4', center && !photos && 'justify-center')}>
              {children}
            </div>
          )}
        </div>
        {photos && photos.length > 0 && <PhotoStack photos={photos} />}
      </div>
    </section>
  );
}
