import React from 'react';
import SubChildComponent from './subChildComponent';

const ChildComponent = (props) => {
    console.log(props.userDetails);
    return (
      <div>
        <h2>
          ChildComponent
        </h2>
        <SubChildComponent userDetails={props.userDetails}/>
      </div>
    )
  }

  export default ChildComponent