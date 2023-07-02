import React from 'react';

const initialState = [{
    firstName:"siva",
    lastName:"sai",
    email:"sai@gmail.com"
},
{
    firstName:"sisakadva",
    lastName:"scddsddai",
    email:"sczvvai@gmail.com"
},
{
    firstName:"sczvzviva",
    lastName:"savdvdvdsi",
    email:"saxxfdi@gmail.com"
}
]

export const MainDataContext = React.createContext();

export const MainDataContextProvider = ({children}) => {
    return <MainDataContext.Provider value={initialState}>
        {children}
    </MainDataContext.Provider>
}