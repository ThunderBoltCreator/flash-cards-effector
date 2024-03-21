import { appStarted } from '@/shared/config/init'
import {
  createHistoryRouter,
  createRoute,
  createRouterControls,
} from 'atomic-router'
import { sample } from 'effector'
import { createBrowserHistory } from 'history'

export const routes = {
  auth: {
    login: createRoute(),
    register: createRoute(),
  },
}

const controls = createRouterControls()

export const router = createHistoryRouter({
  controls,
  routes: [
    {
      path: '/login',
      route: routes.auth.login,
    },
    {
      path: '/register',
      route: routes.auth.register,
    },
  ],
})

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
})
