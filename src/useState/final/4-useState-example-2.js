import React, {useState} from 'react'

const Index = () => {

  const [firstName,setFirstName] = useState("");
  const [email,setEmail] = useState("email@email.com");
  const [password,setPassword] = useState("");

  /* const changeFirstName = (e) => {
    setFirstName(e.target.value);
  }

  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const changePassword = (e) => {
    setPassword(e.target.value);
  }
 */
  const handleInputChange = (e,name) => {
    if(name === "firstName"){
    setFirstName(e.target.value);
    }
    if(name === "email"){
    setEmail(e.target.value);
    }
    if(name === "password"){
    setPassword(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let userObj = {
      firstName:firstName,
      email:email,
      password:password
    }
    console.log(userObj);
  }

  return (
    <form>
    <div className="form-content"><input type="text" name="firstname" id="firstname" value={firstName} placeholder="Enter your name" onChange={(e) => handleInputChange(e,"firstName")}/></div>
    <div className="form-content"><input type="email" name="email" id="email" value={email} placeholder="Enter your email" onChange={(e) => handleInputChange(e,"email")}/></div>
    <div className="form-content"><input type="password" name="password" id="password" value={password} placeholder="Enter your password" onChange={(e) => handleInputChange(e,"password")}/></div>
    <div className="form-button"><button type="submit" onClick={handleSubmit}>submit</button></div>
    </form>
  )
}

export default Index