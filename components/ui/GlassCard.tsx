import { cn } from '@/lib/utils';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export function GlassCard({
  className,
  padding = 'md',
  hover = false,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass',
        {
          'p-6': padding === 'sm',
          'p-8': padding === 'md',
          'p-10 md:p-12': padding === 'lg',
        },
        hover &&
          'transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-primary cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
