import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/shared/lib/utils'

const buttonVariants = cva('button', {
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
      primary:
        'shadow-button bg-accent-500 hover:bg-accent-300 active:bg-accent-700 disabled:bg-accent-900 disabled:text-light-900 disabled:shadow-none',
      secondary: 'bg-dark-300 shadow-buttonSecondary hover:bg-dark-100 active:bg-dark-500 disabled:text-light-900',
    },
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props} />
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
