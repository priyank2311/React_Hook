import React, { useState } from 'react'

function HookCounterTwo() {
    const initaiValue = 0
    const [count, setCount] = useState(initaiValue)

    const Incrementfive = () => {
        for(let i=0; i<5; i++){
            setCount(count => count + 1)
        }
    }
    
    return (
        <div>
            Count: {count} <br />
            <button onClick={()=>setCount(initaiValue)}>Reset</button>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={Incrementfive}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo;
