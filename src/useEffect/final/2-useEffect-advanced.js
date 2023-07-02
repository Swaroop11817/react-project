import React, {useEffect,useState} from 'react';

const Final = () => {
    
    const [count,setCount] = useState(0);
    const [toggle,setToggle] = useState(true);
    const [pageWidth,setPageWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //   console.log('Inside useEffect',count,toggle)
    // },[count,toggle])
    
    useEffect(() => {
    console.log('Inside useeffect',count,toggle)
    const resizeHandler =  () => {
        setPageWidth(window.innerWidth);
    }
     window.addEventListener("resize",resizeHandler);
     console.log('Hello I am coming from useeffect',count,toggle);

     return() => {
         console.log('I am removing');
         window.removeEventListener("resize", resizeHandler);
     }
    })


    console.log('Inside final');
    return <div>
           <h1>Learn useEffect</h1>
           <h1>{pageWidth}</h1>
           <h1 onClick={() => setToggle(!toggle)}>{toggle? "open" : "close"}</h1>
           <h1>{count}</h1>
           <button onClick={() => setCount(count+1)}>+</button>
           </div>
}

export default Final;