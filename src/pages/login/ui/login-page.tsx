import { useId } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'atomic-router-react'
import { clsx } from 'clsx'
import { z } from 'zod'

import { routes } from '~/shared/routing'
import { Button } from '~/shared/ui/button'
import { Card } from '~/shared/ui/card/card'
import { Checkboxes } from '~/shared/ui/checkbox'
import { TextFields, PasswordFields } from '~/shared/ui/text-field'
import { Typography } from '~/shared/ui/typography'

import s from './sign-in.module.scss'

import { loginMutation } from '../model/login-model'

interface LoginFormFields {
  email: string
  password: string
  rememberMe: boolean
}

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  rememberMe: z.boolean(),
})

export function LoginPage() {
  const { register, control, handleSubmit, watch } = useForm<LoginFormFields>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    reValidateMode: 'onChange',
    resolver: zodResolver(loginFormSchema),
  })

  console.log(watch())

  const onLoginFormSubmit = (data: LoginFormFields) => {
    console.log(data)
    loginMutation.start(data)
  }

  return (
    <Card as={'form'} className={clsx(s.signIn)} onSubmit={handleSubmit(onLoginFormSubmit)}>
      <Typography className={s.title} variant={'h1'}>
        Sign In
      </Typography>
      <TextFields.controlled className={s.field} control={control} label={'Email'} name={'email'} type={'email'} />
      <PasswordFields.base {...register('password')} className={s.field} label={'Password'} />
      <Checkboxes.controlled className={s.checkbox} control={control} label={'Remember me'} name={'rememberMe'} />
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
