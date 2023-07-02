import React from 'react'
import {NavLink} from 'react-router-dom'
import {useAuth} from './auth';

function Navbar() {

  const {user,logout} = useAuth();
  console.log(user);
  console.log(logout);

  const navLinkStyles = ({isActive}) => {
   
    return{
      textDecoration: isActive? "none" : "underline",
      fontWeight: isActive? "bold" : "normal"
    };

  }

  return (
    <div>
      <nav className="primary-nav">
        <NavLink style={navLinkStyles} to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="/about">About</NavLink>
        <NavLink style={navLinkStyles} to="/contact">Contact</NavLink>
        <NavLink style={navLinkStyles} to="/projects">Projects</NavLink>
        <NavLink style={navLinkStyles} to="/users">Users</NavLink>
        {
          user?(<NavLink style={navLinkStyles} to="/logout" onClick={logout}>logout</NavLink>)
              :(<NavLink style={navLinkStyles} to="/login">login</NavLink>)
        }
      </nav>
    </div>
  )
}

export default Navbar