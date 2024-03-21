import { createQuery } from '@farfetched/core'

function createPath(path: string) {
  return `https://api.flashcards.andrii.es/${path}`
}

export const getSession = createQuery({
  handler: async () => {
    const response = await fetch(createPath('v1/auth/me'), {
      credentials: 'include',
      method: 'GET',
    })

    if (!response.ok) {
      throw new Error('Failed to get session')
    }

    return response.json()
  },
})
