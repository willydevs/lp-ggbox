import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'cta' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-200 cursor-pointer select-none',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-primary-gradient text-white shadow-glow-primary hover:shadow-glow-pink hover:scale-[1.02] active:scale-[0.98]':
              variant === 'primary',
            'border border-white/20 text-white hover:border-white/40 hover:bg-white/5':
              variant === 'outline',
            'text-white/70 hover:text-white hover:bg-white/5':
              variant === 'ghost',
            'bg-cta-gradient text-white hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg':
              variant === 'cta',
            'bg-[#25D366] text-white hover:bg-[#128C7E] hover:scale-[1.02] active:scale-[0.98]':
              variant === 'whatsapp',
          },
          {
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
          },
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
