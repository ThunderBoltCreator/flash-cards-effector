import { createHistoryRouter, createRoute, createRouterControls } from 'atomic-router'
import { sample } from 'effector'
import { createBrowserHistory } from 'history'

import { appStarted } from '~/shared/config/init'

export const routes = {
  auth: {
    login: createRoute(),
    register: createRoute(),
    forgotPassword: createRoute(),
  },
  home: createRoute(),
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
    {
      path: '/forgot-password',
      route: routes.auth.forgotPassword,
    },
    {
      path: '/',
      route: routes.home,
    },
  ],
})

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
})
