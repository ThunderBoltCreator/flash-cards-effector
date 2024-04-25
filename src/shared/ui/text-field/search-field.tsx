import { ChangeEvent, useId, useState } from 'react'

// import Cross from 'shared/assets/icons/cross'
// import Loup from 'shared/assets/icons/loup'
import { TextFieldProps, TextFields } from './text-fields'

export type SearchFieldProps = {
  onButtonClick?: () => void
} & Omit<TextFieldProps, 'leftIcon' | 'rightIcon' | 'type'> & {}

export function SearchField({ onButtonClick, onValueChange, ...props }: SearchFieldProps) {
  const id = useId()
  const [value, setValue] = useState('')

  const onChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    setValue(value)
    onValueChange?.(value)
  }

  const handleInputClear = () => {
    onValueChange?.('')
    setValue('')
  }

  const SearchIconLabel = <label htmlFor={id}>{'<Loup />'}</label>

  const SearchIconButton = <button onClick={onButtonClick}>{'<Loup />'}</button>

  const ClearInputIcon = <button onClick={handleInputClear}>{'<Cross />'}</button>

  return (
    <TextFields.base
      id={id}
      leftIcon={value ? SearchIconButton : SearchIconLabel}
      onChange={onChangeField}
      rightIcon={value ? ClearInputIcon : null}
      type={'search'}
      value={value}
      {...props}
    />
  )
}
