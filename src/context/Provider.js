import React, {createContext, useReducer} from 'react';

import HomePageInitialState from './initialstates/homePageInitialState';
import AboutPageInitialState from './initialstates/aboutPageInitialState';

import HomePageReducer from './reducers/homePageReducer';
import AboutPageReducer from './reducers/aboutPageReducer';

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) =>{

    const [homePageState, homePageDispatch] = useReducer(HomePageReducer, HomePageInitialState )
    const [aboutPageState, aboutPageDispatch] = useReducer(AboutPageReducer, AboutPageInitialState)
    return (
        <GlobalContext.Provider value={{
                homePageState,
                homePageDispatch,
                aboutPageState,
                aboutPageDispatch,
        }}>{children}</GlobalContext.Provider>
    )
}