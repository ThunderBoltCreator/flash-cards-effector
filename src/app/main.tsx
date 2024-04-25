import React from 'react'

import { RouterProvider } from 'atomic-router-react'
import ReactDOM from 'react-dom/client'

import { Pages } from '~/pages'
import { appStarted } from '~/shared/config/init'
import { router } from '~/shared/routing'

import '~/app/index.scss'

appStarted()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <header></header>
      <main>
        <Pages />
      </main>
    </RouterProvider>
  </React.StrictMode>
)
