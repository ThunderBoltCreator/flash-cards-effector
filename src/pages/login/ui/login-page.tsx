import { useId } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'atomic-router-react'
import { z } from 'zod'

import { loginMutation } from '~/pages/login/model/login-model'
import { routes } from '~/shared/routing'
import { Button } from '~/shared/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '~/shared/ui/card'
import { ControlledCheckbox } from '~/shared/ui/checkbox'
import { Input } from '~/shared/ui/input'
import { Label } from '~/shared/ui/label'
import { Typography } from '~/shared/ui/typography'

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
  const emailId = useId()
  const passwordId = useId()

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
    <Card className={'max-w-md'}>
      <CardHeader>
        <Typography className={'text-center'} variant={'h1'}>
          Sign In
        </Typography>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onLoginFormSubmit)}>
          <div className={'mb-6'}>
            <Label className={'text-dark-100'} htmlFor={emailId}>
              Email
            </Label>
            <Input {...register('email')} id={emailId} name={'email'} placeholder={'Email'} type={'email'} />
          </div>
          <div className={'mb-3'}>
            <Label className={'text-dark-100'} htmlFor={passwordId}>
              Password
            </Label>
            <Input
              {...register('password')}
              id={passwordId}
              name={'password'}
              placeholder={'Password'}
              type={'password'}
            />
          </div>
          <div className={'flex items-center gap-x-2'}>
            <Label className={'flex items-center'}>
              <ControlledCheckbox className={'mr-2'} control={control} name={'rememberMe'} />
              Remember me
            </Label>
          </div>
          <Typography as={Link} className={'self-end'} to={routes.auth.forgotPassword}>
            Forgot Password?
          </Typography>
          <Button size={'fullWidth'} variant={'primary'}>
            Sign In
          </Button>
        </form>
      </CardContent>
      <CardFooter className={'flex-col items-start'}>
        <Typography className={''} variant={'body2'}>
          Don`t have an account?
        </Typography>
        <Typography as={Link} to={routes.auth.register} variant={'link2'}>
          Sign Up
        </Typography>
      </CardFooter>
    </Card>
  )
}
