import React, {useState} from 'react';

const Index = () => {
    const [count,setCount] = useState(0);
    console.log(count);
    console.log(setCount);

    const incrementCount = () =>{
        setCount((prevCount)=>prevCount+1);
        setCount((prevCount)=>prevCount+1);
    }

    const decrementCount = () =>{
        setCount(count-1);
    }

    return(
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default Index;