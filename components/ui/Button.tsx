import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'cta' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const CTA_BG = "url('/images/imgi_246_bg-hover-cta.svg')";
const OUTLINE_BG = "url('/images/imgi_244_grandient-btn-header.svg')";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', style, children, ...props }, ref) => {
    const bgStyle: React.CSSProperties =
      variant === 'cta' || variant === 'primary'
        ? { backgroundImage: CTA_BG, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }
        : variant === 'outline'
        ? { backgroundImage: OUTLINE_BG, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundColor: 'transparent', border: 'none' }
        : {};

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-200 cursor-pointer select-none',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            'text-white hover:scale-[1.02] active:scale-[0.98]':
              variant === 'primary',
            'text-white hover:opacity-80':
              variant === 'outline',
            'text-white/70 hover:text-white hover:bg-white/5':
              variant === 'ghost',
            'text-white hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]':
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
        style={{ ...bgStyle, ...style }}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
