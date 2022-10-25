import React from 'react'
import ReactDOM from 'react-dom/client'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import { CounterWhitCustomHook } from './01-useState/counterWhitCustomHook'
// import { SimpleForm } from './02-useeffect/SimpleForm'
// import { FormWhitCustomHook } from './02-useeffect/formWhitCustomHook'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
import { FocusScreen } from './04-useref/FocusScreen'

import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FocusScreen/>
  </React.StrictMode>
)
