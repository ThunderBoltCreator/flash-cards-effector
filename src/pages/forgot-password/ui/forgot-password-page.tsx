import { useForm } from 'react-hook-form'

import { Button } from '~/shared/ui/button'
import { Card, CardContent, CardHeader } from '~/shared/ui/card'
import { Input } from '~/shared/ui/input'
import { Label } from '~/shared/ui/label'
import { Typography } from '~/shared/ui/typography'

import { forgotPasswordMutation, resetPasswordMutation } from '../model/forgot-password-model'

type FieldsValues = {
  email: string
}

export function ForgotPassword() {
  const { register, handleSubmit } = useForm<FieldsValues>()

  const onSubmit = (data: FieldsValues) => {
    console.log(data)
    forgotPasswordMutation.start({ email: data.email })
  }

  return (
    <Card>
      <CardHeader>
        <Typography variant={'h1'}>Forgot Password</Typography>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>
            Email
            <Input {...register('email')} name={'email'} placeholder={'Email'} type={'email'} />
          </Label>
          {/*<TextFields.controlled*/}
          {/*  className={s.field}*/}
          {/*  control={control}*/}
          {/*  defaultValue={''}*/}
          {/*  label={'Email'}*/}
          {/*  name={'email'}*/}
          {/*  type={'email'}*/}
          {/*/>*/}
          <Typography variant={'body2'}>Enter your email address and we will send you further instructions</Typography>
          <Button size={'fullWidth'} variant={'primary'}>
            Send Instructions
          </Button>
          <Typography variant={'body2'}>Did you remember your password?</Typography>
          <Typography variant={'link1'}>Try logging in</Typography>
          <Button onClick={() => resetPasswordMutation.start()}>Reset Password</Button>
        </form>
      </CardContent>
    </Card>
  )
}
