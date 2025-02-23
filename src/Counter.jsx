import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(20)

    return (
        <>
            <h1>Count From: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase Number</button>
            <button onClick={()=>setCount(count-1)}>Decrease Number</button>

        </>
    )
}


export default Counter;