import React, {useState} from 'react'

const Index = () => {
    const [showData,setShowData] = useState(false);

    const handleChange = () =>{
        setShowData(!showData);
    }

  return (
      <div>
      <button onClick={handleChange}>{showData ? "hide":"show"}</button>
   {/* {showData && ( <div className="content">Lorem Ipsum</div>)}  */}
  {showData? (<div>Lorem Ipsum</div>):(<h3>Data is Hidden</h3>)}
    </div>
  )
}

export default Index
