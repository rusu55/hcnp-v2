import { HOMEPAGE_LOADING, HOMEPAGE_LOADING_SUCCES } from "../types";
import { homePageData} from "../../data/homePage";

export default (dispatch) =>{
    dispatch({
        type: HOMEPAGE_LOADING,
    })
     const data =  homePageData
    
     dispatch({
         type: HOMEPAGE_LOADING_SUCCES,
         payload: data
     })
}