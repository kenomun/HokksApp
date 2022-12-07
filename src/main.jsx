import React from 'react'
import ReactDOM from 'react-dom/client'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import { CounterWhitCustomHook } from './01-useState/counterWhitCustomHook'
// import { SimpleForm } from './02-useeffect/SimpleForm'
// import { FormWhitCustomHook } from './02-useeffect/formWhitCustomHook'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FocusScreen } from './04-useref/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemorHook'
// import { CallBackHooks } from './06-memos/CallBackHooks'
// import { Padre } from './07-tarea-memo/Padre'
// import './08-useReduce/into-reducer'
import { TodoApp } from './08-useReduce/TodoApp'

import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp/>
  // </React.StrictMode>
)
