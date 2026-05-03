import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App.tsx'

import reducers from './redux/reducers'

const store=configureStore({
  reducer:reducers,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />

    </Provider>
  </StrictMode>,
)
