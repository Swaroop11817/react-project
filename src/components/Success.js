import React from 'react'
import {useNavigate} from 'react-router-dom';


function Success() {
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/");
  }
  return (
    <div>
        <h1>Successfully Submitted</h1>
        <button onClick={navigateToHomePage}>Back To Home</button>
    </div>
  )
}

export default Success;