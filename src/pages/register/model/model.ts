import { routes } from '@/shared/routing'

export const currentRoute = routes.auth.register

// route logic
currentRoute.opened.watch(() => console.info('register route open'))
