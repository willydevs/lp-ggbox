import { cn } from '@/lib/utils';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'card' | 'text' | 'circle';
}

export function Skeleton({ className, variant = 'default', ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-white/5 rounded-xl',
        {
          'h-4 w-full': variant === 'text',
          'aspect-[3/4] w-full': variant === 'card',
          'rounded-full': variant === 'circle',
        },
        className,
      )}
      aria-hidden="true"
      {...props}
    />
  );
}

export function GameCardSkeleton() {
  return (
    <div className="animate-pulse">
      <Skeleton variant="card" />
      <Skeleton variant="text" className="mt-2 w-3/4 h-3" />
    </div>
  );
}

export function GameGridSkeleton({ count = 20 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <GameCardSkeleton key={i} />
      ))}
    </div>
  );
}
