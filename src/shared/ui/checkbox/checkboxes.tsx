import type { ComponentPropsWithoutRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'

import { Typography } from '~/shared/ui/typography'

import s from './checkbox.module.scss'

import CheckboxIcon from './CheckboxIcon'

export type CheckboxProps = {
  label?: string
  onChange?: (checked: boolean) => void
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

function Checkbox({ checked = false, className, disabled, label, onChange, value, ...props }: CheckboxProps) {
  const styles = {
    checkbox: s.checkbox,
    frame: s.frame,
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
    root: clsx(s.root, className),
  }

  return (
    <LabelRadix.Root asChild className={styles.root}>
      <Typography as={'label'} className={styles.label} variant={'body2'}>
        <CheckboxRadix.Root
          checked={checked}
          className={styles.checkbox}
          defaultChecked={false}
          disabled={disabled}
          onChange={onChange}
          onCheckedChange={onChange}
          value={value}
          {...props}
        >
          <div className={styles.frame} />
          {checked && (
            <CheckboxRadix.Indicator className={styles.indicator}>
              <CheckboxIcon />
            </CheckboxRadix.Indicator>
          )}
        </CheckboxRadix.Root>
        {label}
      </Typography>
    </LabelRadix.Root>
  )
}

export { Checkbox }
