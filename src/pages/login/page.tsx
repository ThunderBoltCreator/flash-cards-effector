import { useId } from 'react'

import { Link } from 'atomic-router-react'

import image from '~/shared/image-plug.png'
import { Button } from '~/shared/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '~/shared/ui/card'
import { Checkbox } from '~/shared/ui/checkbox'
import { Input } from '~/shared/ui/input'
import { Label } from '~/shared/ui/label'
import { Typography } from '~/shared/ui/typography'
export function LoginPage() {
  const emailId = useId()
  const passwordId = useId()
  const rememberMeId = useId()

  return (
    <Card className={'max-w-md'}>
      <CardHeader>
        <Typography className={'text-center'} variant={'h1'}>
          Sign In
        </Typography>
      </CardHeader>
      <CardContent>
        <div className={'mb-6'}>
          <Label className={'text-dark-100'} htmlFor={emailId}>
            Email
          </Label>
          <Input id={emailId} name={'email'} placeholder={'Email'} type={'email'} />
        </div>
        <div className={'mb-3'}>
          <Label className={'text-dark-100'} htmlFor={passwordId}>
            Password
          </Label>
          <Input id={passwordId} name={'password'} type={'text'} value={'blabalbal'} />
        </div>
        <div className={'flex items-center gap-x-2'}>
          <Checkbox id={rememberMeId} name={'rememberMe'} />
          <Label htmlFor={rememberMeId}>Remember me</Label>
        </div>
      </CardContent>
      <CardFooter className={'flex-col items-start'}>
        <Typography as={Link} className={'self-end'} to={''}>
          Forgot Password?
        </Typography>
        <Button size={'fullWidth'} variant={'secondary'}>
          Sign In
        </Button>
        <Typography className={''} variant={'body2'}>
          Don`t have an account?
        </Typography>
        <Typography as={Link} to={''} variant={'link2'}>
          Sign Up
        </Typography>

        <Link to={'/register'}>
          <Button type={'submit'}>
            <img alt={''} src={image} />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
