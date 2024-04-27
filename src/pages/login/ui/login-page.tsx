import { useForm, Controller } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { z } from 'zod'

import { submitLoginEvent } from '~/pages/login/model/login-model'
import { Button } from '~/shared/ui/button'
import { Card } from '~/shared/ui/card/card'
import { Checkbox } from '~/shared/ui/checkbox'
import { TextField, PasswordField } from '~/shared/ui/text-field'
import { Typography } from '~/shared/ui/typography'

import s from './sign-in.module.scss'

export interface LoginFormFields {
  email: string
  password: string
  rememberMe: boolean
}

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, 'Password must contain at least 6 character(s)')
    .max(12, 'Password must contain at most 12 character(s)'),
  rememberMe: z.boolean(),
})

export function LoginPage() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<LoginFormFields>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    reValidateMode: 'onChange',
    resolver: zodResolver(loginFormSchema),
  })

  const onLoginFormSubmit = (data: LoginFormFields) => {
    submitLoginEvent(data)
  }

  console.log(watch())

  return (
    <Card as={'form'} className={clsx(s.signIn)} onSubmit={handleSubmit(onLoginFormSubmit)}>
      <Typography className={s.title} variant={'h1'}>
        Sign In
      </Typography>
      <TextField
        {...register('email')}
        className={s.field}
        errorMessage={errors.email?.message}
        label={'Email'}
        name={'email'}
        type={'email'}
      />
      <PasswordField
        errorMessage={errors.password?.message}
        {...register('password')}
        className={s.field}
        label={'Password'}
        name={'password'}
      />
      <Controller
        control={control}
        name={'rememberMe'}
        render={({ field: { name, value, onChange } }) => (
          <Checkbox checked={value} className={s.checkbox} label={'Remember me'} name={name} onChange={onChange} />
        )}
      />

      <Typography className={s.forgot} variant={'link1'}>
        Forgot Password?
      </Typography>
      <Button className={s.buttonSubmit} fullWidth>
        Sign In
      </Button>
      <Typography className={s.registerLabel} variant={'body2'}>
        Don`t have an account?
      </Typography>
      <Typography variant={'link2'}>Sign Up</Typography>
    </Card>
  )
}
