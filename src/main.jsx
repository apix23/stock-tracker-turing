import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { useRegisterSW } from 'virtual:pwa-register/react'

const RegisterSW = () => {
  useRegisterSW({ onRegistered: () => console.log('SW Registered') })
  return <></>
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={import.meta.env.BASE_URL}>
      <RegisterSW />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
