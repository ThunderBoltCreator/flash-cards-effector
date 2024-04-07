import { chainRoute, RouteInstance, RouteParams, RouteParamsAndQuery } from 'atomic-router'
import { createEvent, sample } from 'effector'

import { routes } from '~/shared/routing'
import { $auth, chainAuthorized } from '~/shared/session'

export const currentRoute = routes.home
export const authorizedRoute = chainAuthorized(currentRoute)
