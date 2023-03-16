import { MODAL_OPEN, MODAL_CLOSE } from "../types"
const ModalReducer = (state, {type, payload}) =>{
    switch(type){
        case MODAL_OPEN:
            return{
                ...state,
                showModal: payload,
            }
        case MODAL_CLOSE:
            return{
                ...state,
                showModal: payload,
            }
        default:
            return state
    }
}

export default ModalReducer