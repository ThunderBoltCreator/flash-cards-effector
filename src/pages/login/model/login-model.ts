import { createMutation } from '@farfetched/core'
import { createEffect, createEvent, sample, createStore } from 'effector'

import { LoginFormFields } from '~/pages/login/ui/login-page'
import { createPath } from '~/shared/api'
import { routes } from '~/shared/routing'

export const loginRoute = routes.auth.login

// route logic
loginRoute.opened.watch(() => console.info('login route open'))
loginRoute.closed.watch(() => console.info('login route close'))

export const $loginFormFields = createStore<LoginFormFields>({
  email: '',
  password: '',
  rememberMe: false,
})

export const submitLoginEvent = createEvent<LoginFormFields>()

$loginFormFields.on(submitLoginEvent, (_, data) => data)
export const loginFx = createEffect(
  async ({ email, password, rememberMe }: { email: string; password: string; rememberMe: boolean }) => {
    const res = await fetch(createPath('v1/auth/login'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, rememberMe }),
      credentials: 'include',
    })

    if (!res.ok) {
      console.log('ne ok loginFx', res)
      throw new Error('loginFx error')
    }

    console.log('ok loginFx', res)

    return res.json()
  }
)

export const loginMutation = createMutation({
  effect: loginFx,
})

sample({
  clock: submitLoginEvent,
  source: $loginFormFields,
  target: loginMutation.start,
})
