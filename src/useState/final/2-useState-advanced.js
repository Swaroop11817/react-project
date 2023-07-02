import React,{useState} from 'react';

const Index = () => {

    const InitialObj = {
        firstName:"emma",
        lastName:"watson",
        age: 27
    }

    const [data,setData] = useState(InitialObj);

    const changeFirstName = () => {
        setData(
            {
                ...data,
                firstName:"Sai"
            }
        )
    }

    const changeLastName = () => {
        setData(
            {
                ...data,
                lastName:"Swaroop"
            }
        )
    }

    return <div>
    <h1>my name is {data.firstName}</h1>
    <button onClick={changeFirstName}>change firstname</button>
    <h1>my name is {data.lastName}</h1>
    <button onClick={changeLastName}>change lastname</button>
    <h1>age {data.age}</h1>
    </div>;
}

export default Index;