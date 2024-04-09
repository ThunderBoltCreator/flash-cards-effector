import { chainRoute, RouteInstance, RouteParams, RouteParamsAndQuery } from 'atomic-router'
import { createEvent, createStore, Effect, sample, Event } from 'effector'

enum AuthStatus {
  Initial = 0,
  Pending,
  Anonymous,
  Authenticated,
}

export const $auth = createStore(false)
export const $tokenReceived = createStore('any token')

interface ChainParams<Params extends RouteParams> {
  otherwise?: Effect<void, any, any> | Event<void>
}

export function chainAuthorized<Params extends RouteParams>(
  route: RouteInstance<Params>,
  { otherwise }: ChainParams<Params> = {}
): RouteInstance<Params> {
  const sessionCheckStarted = createEvent<RouteParamsAndQuery<Params>>()
  const sessionReceivedAnonymous = createEvent<RouteParamsAndQuery<Params>>()

  const alreadyAuthorized = sample({
    clock: sessionCheckStarted,
    source: $auth,
    filter: (auth) => auth === true,
  })

  const alreadyAnonymous = sample({
    clock: sessionCheckStarted,
    source: $auth,
    filter: (auth) => auth === false,
  })

  if (otherwise) {
    sample({
      clock: alreadyAnonymous,
      target: otherwise as Event<void>,
    })
  }

  return chainRoute({
    beforeOpen: sessionCheckStarted,
    openOn: alreadyAuthorized,
    cancelOn: alreadyAnonymous,
    route,
  })
}

export function chainAnonymous<Params extends RouteParams>(route: RouteInstance<Params>): RouteInstance<Params> {
  return chainRoute({
    beforeOpen: $auth,
    openOn: $auth,
    route,
  })
}
