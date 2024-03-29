import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/components/common/theme-provider'

import './styles/App.css'
import router from '@/routes'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
