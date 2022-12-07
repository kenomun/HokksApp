import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHooks = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
      () => {
        setCounter( (value) => value + 1 )
      },
      [],
    )

    const incrementFather2 = useCallback(
        (value = 5) => {
          setCounter( (c) => c + value  )
        },
        [],
      )
    
  return (
    <>
        <h1>useCallbackGHook: { counter } </h1>
        <hr />
        <ShowIncrement increment={ incrementFather } />
        <ShowIncrement increment={ incrementFather2 } />
    </>
  )
}