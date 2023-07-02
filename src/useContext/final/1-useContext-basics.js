import React,{useState} from 'react';
import ChildComponent from './childComponent';

const ParentComponent = () => {
    const[userDetails,setUserDetails] = useState({
        firstName:'emma',
        lastName:'watson',
        email:'emma@gmail.com'
    });
    
  return (
    <div>
      <h1>
        useContext
      </h1>
      <ChildComponent userDetails={userDetails}/>
    </div>
  )
}
export default ParentComponent;