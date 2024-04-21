import { useId } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Paper, Title, Stack, TextInput, Text, Checkbox, Button, Group } from '@mantine/core'
import { Link } from 'atomic-router-react'
import { z } from 'zod'

import { routes } from '~/shared/routing'

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
    <Paper component={'section'} p={'xl'}>
      <Stack>
        <Title order={1}>Sign In</Title>
        <form onSubmit={handleSubmit(onLoginFormSubmit)}>
          {/*<Label className={'text-dark-100'} htmlFor={emailId}>*/}
          {/*  Email*/}
          {/*</Label>*/}
          {/*<Input {...register('email')} id={emailId} name={'email'} placeholder={'Email'} type={'email'} />*/}
          <TextInput
            {...register('email')}
            label={<Text size={'sm'}>Email</Text>}
            name={'email'}
            placeholder={'Email'}
            type={'email'}
          />
          {/*<Label className={'text-dark-100'} htmlFor={passwordId}>*/}
          {/*  Password*/}
          {/*</Label>*/}
          {/*<Input*/}
          {/*  {...register('password')}*/}
          {/*  id={passwordId}*/}
          {/*  name={'password'}*/}
          {/*  placeholder={'Password'}*/}
          {/*  type={'password'}*/}
          {/*/>*/}
          <TextInput
            {...register('password')}
            label={<Text size={'sm'}>Password</Text>}
            name={'password'}
            placeholder={'Password'}
            type={'password'}
          />
          {/*<div className={'flex items-center gap-x-2'}>*/}
          {/*  <Label className={'flex items-center'}>*/}
          {/*    <ControlledCheckbox className={'mr-2'} control={control} name={'rememberMe'} />*/}
          {/*    Remember me*/}
          {/*  </Label>*/}
          {/*</div>*/}
          <Checkbox {...register('rememberMe')} label={<Text size={'sm'}>Remember me</Text>} name={'rememberMe'} />
          <Text className={'self-end'} component={Link} to={routes.auth.forgotPassword}>
            Forgot Password?
          </Text>
          <Button size={'fullWidth'} variant={'primary'}>
            Sign In
          </Button>
        </form>
        <Text className={''} variant={'body2'}>
          Don`t have an account?
        </Text>
        <Text component={Link} to={routes.auth.register} variant={'link2'}>
          Sign Up
        </Text>
      </Stack>
    </Paper>
  )
}
