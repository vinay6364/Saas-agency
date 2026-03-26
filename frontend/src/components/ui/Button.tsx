import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]";
    
    const variants = {
      default: "bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]",
      outline: "border-2 border-slate-700 bg-darker hover:bg-slate-800 text-slate-100",
      ghost: "hover:bg-slate-800/50 text-slate-100",
    };
    
    const sizes = {
      default: "h-11 px-6 py-2 text-sm",
      sm: "h-9 rounded-md px-4 text-xs",
      lg: "h-14 rounded-xl px-10 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
