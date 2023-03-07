import { HOMEPAGE_LOADING,
         HOMEPAGE_LOADING_SUCCES
} from "../types";


const HomePageReducer = (state, {type, payload}) =>{
    switch(type){
        case HOMEPAGE_LOADING:
            return{
                ...state,
                homePage:{
                    loading: true,
                }
            }
        case HOMEPAGE_LOADING_SUCCES:
            return{
                ...state,
                homePage:{
                    loading: false,
                    data: payload
                }
            }
            default:
                return state
    }
}

export default HomePageReducer