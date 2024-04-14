import { createMutation } from '@farfetched/core'
import { createEffect } from 'effector'

import { createPath } from '~/shared/api'
import { routes } from '~/shared/routing'

export const currentRoute = routes.auth.register

// route logic
currentRoute.opened.watch(() => console.info('register route open'))

export const registerFx = createEffect(async ({ email, password }: { email: string; password: string }) => {
  const res = await fetch(createPath('v1/auth/register'), {
    method: 'POST',
    body: JSON.stringify({ email, password, rememberMe }),
  })
})

export const registerMutation = createMutation({
  effect: registerFx,
})
