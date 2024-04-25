import { createMutation } from '@farfetched/core'
import { createEffect, createEvent, sample } from 'effector'

import { createPath } from '~/shared/api'
import { routes } from '~/shared/routing'

export const loginRoute = routes.auth.login

// route logic
loginRoute.opened.watch(() => console.info('login route open'))
loginRoute.closed.watch(() => console.info('login route close'))

export const submitLoginEvent = createEvent()
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
      throw new Error('loginFx error')
    }
  }
)

export const loginMutation = createMutation({
  effect: loginFx,
})

// sample({
//     clock: loginMutation.finished,
//     filter: loginMutation.$succeeded,
//     fn:
// })
