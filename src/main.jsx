import React, { VFC } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { useRegisterSW } from 'virtual:pwa-register/react'

const RegisterSW = () => {
  useRegisterSW({ onRegistered: () => console.log('SW Registered') })
  return <></>
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <RegisterSW />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
