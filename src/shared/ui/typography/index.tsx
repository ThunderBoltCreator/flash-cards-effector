import type { ComponentPropsWithoutRef, ElementType } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

const index = cva('typography', {
  defaultVariants: {
    variant: 'body1',
  },
  variants: {
    variant: {
      body1: [''],
      body2: ['text-s'],
      caption: ['text-xs', 'leading-s'],
      error: ['text-xs', 'leading-s', 'text-danger-500'],
      h1: ['font-bold', 'text-xl', 'leading-l'],
      h2: ['font-bold', 'text-l'],
      h3: ['font-bold', 'text-l'],
      h4: ['font-bold'],
      link1: ['text-s', 'underline', 'text-info-500'],
      link2: ['text-xs', 'underline', 'text-info-500', 'leading-s'],
      overline: ['font-bold', 'text-xs', 'leading-s'],
      subtitle1: ['font-bold'],
      subtitle2: ['font-bold', 'text-s'],
    },
  },
})
const components = {
  body1: 'p',
  body2: 'p',
  caption: 'span',
  error: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  link1: 'a',
  link2: 'a',
  overline: 'span',
  subtitle1: 'h5',
  subtitle2: 'h6',
} as const

type TypographyProps<T extends ElementType> = {
  as?: T
  className?: string
} & ComponentPropsWithoutRef<T> &
  VariantProps<typeof index>

export function Typography<T extends ElementType = 'p'>({
  as,
  className,
  variant,
  ...props
}: TypographyProps<T>) {
  const Component: ElementType = as || (variant && components[variant]) || 'p'

  return <Component {...props} className={index({ className, variant })} />
}
