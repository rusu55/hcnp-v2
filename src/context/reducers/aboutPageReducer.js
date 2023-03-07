import { ABOUTPAGE_LOADING,
    ABOUTPAGE_LOADING_SUCCES
} from "../types";


const AboutPageReducer = (state, {type, payload}) =>{
switch(type){
   case ABOUTPAGE_LOADING:
       return{
           ...state,
           aboutPage:{
               loading: true,
           }
       }
   case ABOUTPAGE_LOADING_SUCCES:
       return{
           ...state,
           aboutPage:{
               loading: false,
               data: payload
           }
       }
       default:
           return state
}
}

export default AboutPageReducer