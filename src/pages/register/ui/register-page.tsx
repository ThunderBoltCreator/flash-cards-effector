import { useId } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'atomic-router-react'
import { z } from 'zod'

import { registerMutation } from '~/pages/register/model/register-model'
import { routes } from '~/shared/routing'
import { Button } from '~/shared/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '~/shared/ui/card'
import { Input } from '~/shared/ui/input'
import { Label } from '~/shared/ui/label'
import { Typography } from '~/shared/ui/typography'

interface RegisterFormFields {
  confirmPassword: string
  email: string
  name: string
  password: string
}

const registerFormSchema = z
  .object({
    name: z.string().min(3).max(30),
    email: z.string().email(),
    password: z.string().min(3).max(30),
    confirmPassword: z.string().min(3).max(30),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
      })
    }
  })

export const RegisterPage = () => {
  const nameId = useId()
  const emailId = useId()
  const passwordId = useId()
  const confirmPasswordId = useId()

  const { register, handleSubmit } = useForm<RegisterFormFields>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    reValidateMode: 'onChange',
    resolver: zodResolver(registerFormSchema),
  })

  const onRegisterFormSubmit = (data: RegisterFormFields) => {
    console.log(data)
    registerMutation.start({
      email: data.email,
      name: data.name,
      password: data.password,
    })
  }

  return (
    <Card className={'max-w-md'}>
      <CardHeader>
        <Typography className={'text-center'} variant={'h1'}>
          Sign Up
        </Typography>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onRegisterFormSubmit)}>
          <div className={'mb-6'}>
            <Label className={'text-dark-100'} htmlFor={nameId}>
              Name
            </Label>
            <Input {...register('name')} id={nameId} name={'name'} placeholder={'Name'} type={'text'} />
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
          <div className={'mb-3'}>
            <Label className={'text-dark-100'} htmlFor={passwordId}>
              Password
            </Label>
            <Input
              {...register('confirmPassword')}
              id={confirmPasswordId}
              name={'confirmPassword'}
              placeholder={'Confirm Password'}
              type={'password'}
            />
          </div>
          <Typography as={Link} className={'self-end'} to={''}>
            Forgot Password?
          </Typography>
          <Button size={'fullWidth'} variant={'primary'}>
            Sign Up
          </Button>
        </form>
      </CardContent>
      <CardFooter className={'flex-col items-start'}>
        <Typography className={''} variant={'body2'}>
          Already have an account?
        </Typography>
        <Typography as={Link} to={routes.auth.login} variant={'link2'}>
          Sign In
        </Typography>
      </CardFooter>
    </Card>
  )
}
