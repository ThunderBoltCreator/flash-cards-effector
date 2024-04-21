import React from 'react'

import { generateColors } from '@mantine/colors-generator'
import { createTheme, HeadlessMantineProvider } from '@mantine/core'
import { RouterProvider } from 'atomic-router-react'
import ReactDOM from 'react-dom/client'

import { Pages } from '~/pages'
import { appStarted } from '~/shared/config/init'
import { router } from '~/shared/routing'

// import '@mantine/core/styles.css'

appStarted()

const theme = createTheme({
  fontFamily: 'Roboto, sans-serif',
  colors: {
    accent: generateColors('hsl(256, 45%, 28%)'),
    success: generateColors('hsl(150, 82%, 22%)'),
    danger: generateColors('hsl(348, 82%, 22%)'),
    warning: generateColors('hsl(40, 100%, 20%)'),
    info: generateColors('hsl(218, 63%, 37%)'),
    light: generateColors('hsl(260, 5%, 77%)'),
    dark: generateColors('hsl(0, 0%, 0%)'),
  },
  primaryColor: 'accent',
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeadlessMantineProvider theme={theme}>
      <RouterProvider router={router}>
        <main>
          <Pages />
        </main>
      </RouterProvider>
    </HeadlessMantineProvider>
  </React.StrictMode>
)
