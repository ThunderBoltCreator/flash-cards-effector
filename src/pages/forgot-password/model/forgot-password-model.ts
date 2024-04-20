import { createMutation } from '@farfetched/core'
import { createEffect } from 'effector/compat'

import { createPath } from '~/shared/api'
import { routes } from '~/shared/routing'

export const currentRoute = routes.auth.forgotPassword

const forgotPasswordFx = createEffect(async ({ email }: { email: string }) => {
  const res = await fetch(createPath('v1/auth/recover-password'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      email: email,
      html: '<h1>Hi, ##name##</h1><p>Click <a href="##token##">here</a> to recover your password</p>',
    }),
  })
})

const resetPasswordFx = createEffect(async () => {
  const res = await fetch(createPath(`v1/auth/reset-password/673f3d3a-12da-4985-b8ab-547079cfe260`), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      password: 'qwerty12345',
    }),
  })

  if (res.ok) {
    console.log('OK')
  }

  console.log(res)
})

export const forgotPasswordMutation = createMutation({
  effect: forgotPasswordFx,
})
export const resetPasswordMutation = createMutation({
  effect: resetPasswordFx,
})
