import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/shared/lib/utils'

const buttonVariants = cva(
  'flex w-fit cursor-pointer items-center justify-center gap-2.5 rounded bg-accent-500 px-7 py-1.5 text-s font-bold  leading-m text-light-100 no-underline transition-colors  duration-300 ease-linear hover:bg-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-info-700 active:bg-accent-700',
  {
    compoundVariants: [],
    defaultVariants: {
      size: 'default',
      variant: 'primary',
    },
    variants: {
      size: {
        default: 'w-fit',
        fullWidth: 'w-full',
      },
      variant: {
        link: 'text-primary underline-offset-4 hover:underline',
        outline:
          'hover:bg-accent hover:text-accent-foreground border border-input bg-background shadow-sm',
        primary: 'bg-accent-500 shadow-button',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm',
      },
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ className, size, variant }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
