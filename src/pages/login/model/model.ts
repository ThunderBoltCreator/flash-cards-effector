import { routes } from '@/shared/routing'

export const currentRoute = routes.auth.login

// rote logic
currentRoute.opened.watch(() => console.info('login route open'))
