import { useId } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'atomic-router-react'
import { z } from 'zod'

import { routes } from '~/shared/routing'
import { Button } from '~/shared/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '~/shared/ui/card'
import { ControlledCheckbox } from '~/shared/ui/checkbox'
import { Input } from '~/shared/ui/input'
import { Label } from '~/shared/ui/label'
import { Typography } from '~/shared/ui/typography'

const registerFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
})

export const RegisterPage = () => {
  const emailId = useId()
  const passwordId = useId()
  const confirmPasswordId = useId()

  const { register, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    reValidateMode: 'onChange',
    resolver: zodResolver(registerFormSchema),
  })

  return (
    <Card className={'max-w-md'}>
      <CardHeader>
        <Typography className={'text-center'} variant={'h1'}>
          Sign Up
        </Typography>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onLoginFormSubmit)} ref={formRef}>
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
          Don`t have an account?
        </Typography>
        <Typography as={Link} to={routes.auth.register} variant={'link2'}>
          Sign Up
        </Typography>
      </CardFooter>
    </Card>
  )
}
