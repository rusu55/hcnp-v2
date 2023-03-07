import React, {createContext, useReducer} from 'react';

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) =>{

    return (
        <GlobalContext.Provider value={{

        }}>{children}</GlobalContext.Provider>
    )
}