import { LoginRoute } from '@/pages/login'
import { RegisterRoute } from '@/pages/register'
import { createRoutesView } from 'atomic-router-react'

export const Pages = createRoutesView({
  routes: [LoginRoute, RegisterRoute],
})
