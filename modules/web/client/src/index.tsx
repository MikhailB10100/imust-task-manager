import React from 'react'
import ReactDOM from 'react-dom/client'
import { Application, applicationStore } from './application'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={applicationStore}>
    <Application />
  </Provider>
)
