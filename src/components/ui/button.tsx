'use client'

import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        className={cn(
          'rounded-md px-4 py-2 font-medium transition-colors',
          variant === 'primary' && 'bg-accent text-primary hover:bg-accent/90',
          variant === 'secondary' && 'bg-secondary text-gray-700 hover:bg-secondary/80',
          variant === 'ghost' && 'hover:bg-gray-100',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button } 