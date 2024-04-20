import { createRoutesView } from 'atomic-router-react'

import { ForgotPasswordRoute } from '~/pages/forgot-password'
import { LoginRoute } from '~/pages/login'
import { RegisterRoute } from '~/pages/register'

export const Pages = createRoutesView({
  routes: [LoginRoute, RegisterRoute, ForgotPasswordRoute],
})
