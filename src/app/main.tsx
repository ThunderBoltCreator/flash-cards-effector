import React from 'react'

import { RouterProvider } from 'atomic-router-react'
import ReactDOM from 'react-dom/client'

import { Pages } from '~/pages'
import { appStarted } from '~/shared/config/init'
import { router } from '~/shared/routing'

import '~/app/globals.css'

appStarted()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Pages />
    </RouterProvider>
  </React.StrictMode>
)
