import React from 'react';
import {useNavigate} from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    const navigateToHomePage = () => {
    navigate("/");
  }
  return (
    <div>
      <h1>404 NotFound</h1>
      <button onClick={navigateToHomePage}>Back To Home</button>
      </div>
  )
}

export default NotFound;