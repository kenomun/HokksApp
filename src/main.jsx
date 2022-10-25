import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-useState/CounterApp'
import { HooksApp } from './HooksApp'
import { CounterWhitCustomHook } from './01-useState/counterWhitCustomHook'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWhitCustomHook />
  </React.StrictMode>
)
