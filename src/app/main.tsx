import React from 'react'

import { Pages } from '@/pages'
import { appStarted } from '@/shared/config/init'
import { router } from '@/shared/routing'
import { RouterProvider } from 'atomic-router-react'
import ReactDOM from 'react-dom/client'

import './index.css'

appStarted()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Pages />
    </RouterProvider>
  </React.StrictMode>
)
