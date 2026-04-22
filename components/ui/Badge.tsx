import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'hot' | 'success' | 'outline' | 'glass';
}

export function Badge({ className, variant = 'primary', children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase',
        {
          'bg-primary-600/20 text-primary-300 border border-primary-600/30': variant === 'primary',
          'bg-cta-gradient text-white shadow-sm': variant === 'hot',
          'bg-success/20 text-success border border-success/30': variant === 'success',
          'border border-white/20 text-white/70': variant === 'outline',
          'glass text-white/80': variant === 'glass',
        },
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
