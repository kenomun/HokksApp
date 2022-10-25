import { useState } from "react"

export const useCounter = (InitialValue = 10) => {

    const [counter, setCounter] = useState(InitialValue)

    const increment = (value) => {
        setCounter( counter + value )
    }

    const decrement = () => {
        if (counter === 0) return;
        setCounter( counter - 1 )
    }
    const reset = () => {
        setCounter( InitialValue )
    }

    
    return{
        counter,
        increment,
        decrement,
        reset,
    }
}