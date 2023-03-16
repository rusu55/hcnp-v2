import { MODAL_OPEN, MODAL_CLOSE } from "../types";

export const openModal = (dispatch) =>{
    dispatch({
        type: MODAL_OPEN,
        payload: true
    })   
    
}

export const closeModal = (dispatch) =>{
    dispatch({
        type: MODAL_OPEN,
        payload: false
    })   
    
}