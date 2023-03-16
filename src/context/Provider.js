import React, {createContext, useReducer} from 'react';

import HomePageInitialState from './initialstates/homePageInitialState';
import AboutPageInitialState from './initialstates/aboutPageInitialState';
import ModalInitialState from './initialstates/modalInitialState';

import HomePageReducer from './reducers/homePageReducer';
import AboutPageReducer from './reducers/aboutPageReducer';

import ModalReducer from './reducers/modalReducer';

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) =>{

    const [homePageState, homePageDispatch] = useReducer(HomePageReducer, HomePageInitialState )
    const [aboutPageState, aboutPageDispatch] = useReducer(AboutPageReducer, AboutPageInitialState)
    const [showModal, setShowModalDispatch] = useReducer(ModalReducer, ModalInitialState)
    return (
        <GlobalContext.Provider value={{
                homePageState,
                homePageDispatch,
                aboutPageState,
                aboutPageDispatch,
                showModal,
                setShowModalDispatch,
        }}>{children}</GlobalContext.Provider>
    )
}