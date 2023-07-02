import React, {useEffect,useState} from 'react';

const Final = () => {
    
    const [count,setCount] = useState(0);


    useEffect(() => {
      console.log('Inside useEffect',count)
    })
    


    console.log('Inside final');
    return <div>
           <h1>Learn useEffect</h1>
           <h1>{count}</h1>
           <button onClick={() => setCount(count+1)}>+</button>
           </div>
}

export default Final;