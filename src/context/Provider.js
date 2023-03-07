import React, {createContext, useReducer} from 'react';

import HomePageInitialState from './initialstates/homePageInitialState';
import HomePageReducer from './reducers/homePageReducer';

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) =>{

    const [homePageState, homePageDispatch] = useReducer(HomePageReducer, HomePageInitialState )
    return (
        <GlobalContext.Provider value={{
                homePageState,
                homePageDispatch
        }}>{children}</GlobalContext.Provider>
    )
}