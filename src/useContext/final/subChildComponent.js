import React,{useContext} from 'react';
import { UserContext } from '../../context/userContext';
import { MainDataContext} from '../../context/mainDataContext';

const SubChildComponent = ({userDetails}) => {
    const data = useContext(UserContext);
    const maindata = useContext(MainDataContext);
    console.log(data);
    console.log(maindata);
    console.log(userDetails);
    return (
      <div>
         <h3>Sub Child Component</h3>
         <div>first name:{data.firstName}</div>
         <div>last name: {data.lastName}</div>
         <div>email: {data.email}</div>
      </div>
    )
  }

  export default SubChildComponent;