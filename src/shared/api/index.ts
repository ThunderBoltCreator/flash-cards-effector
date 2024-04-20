import { createQuery } from '@farfetched/core'
import { createEffect } from 'effector'

export function createPath(path: string) {
  return `https://api.flashcards.andrii.es/${path}`
}

interface Request {
  body?: unknown
  headers?: Record<string, string>
  method: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'
  path: string
}
export const requestFx = createEffect<Request, any>(async ({ body, method, path, headers }) => {
  return fetch(createPath(path), {
    credentials: 'include',
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  })
    .then((res) => res.json())
    .catch((error) => Promise.reject(error))
})

const getMeFx = createEffect(async () => {
  const response = await fetch(createPath('v1/auth/me'), {
    credentials: 'include',
    method: 'GET',
  })

  // const response = await requestFx({ method: 'GET', path: 'v1/auth/me' })

  if (!response.ok) {
    throw new Error('Failed to get session')
  }

  return response.json()
})

export const getSessionQuery = createQuery({
  effect: getMeFx,
})
