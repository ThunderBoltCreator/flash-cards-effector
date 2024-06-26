import type {TextFieldProps} from './text-fields'

import {forwardRef, useState} from 'react'

import {TextField} from '~/shared/ui/text-field/text-fields'

type PasswordFieldProps = Omit<TextFieldProps, 'rightIcon' | 'type'> & {
   showPasswordInit?: boolean
}

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
   ({disabled, showPasswordInit, ...props}, ref) => {
      const [showPas, setShowPas] = useState(!!showPasswordInit)
      const type = showPas ? 'text' : 'password'

      const toggleShowPas = () => {
         if (disabled) {
            return
         }

         setShowPas(!showPas)
      }

      return (
         <TextField
            disabled={disabled}
            ref={ref}
            {...props}
            rightIcon={
               <button disabled={disabled} onClick={toggleShowPas} type={'button'}>
                  {showPas ? '<Eye />' : '<CloseEye />'}
               </button>
            }
            type={type}
         />
      )
   }
)

// type ControlledPasswordFieldProps<T extends FieldValues> = UseControllerProps<T> &
//   Omit<PasswordFieldProps, 'id' | 'onChange' | 'value'>

// function ControlledPasswordField<T extends FieldValues>({
//   control,
//   defaultValue,
//   name,
//   rules,
//   shouldUnregister,
//   ...props
// }: ControlledPasswordFieldProps<T>) {
//   const {
//     field: { onChange, value },
//   } = useController({ control, defaultValue, name, rules, shouldUnregister })
//
//   return <PasswordField onChange={onChange} value={value} {...props} />
// }

// export const PasswordFields = {
//   base: PasswordField,
//   controlled: ControlledPasswordField,
// }

export {PasswordField}