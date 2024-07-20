import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { lime, purple } from '@mui/material/colors'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

const theme = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },

})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>

        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
