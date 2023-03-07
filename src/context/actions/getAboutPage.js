import { ABOUTPAGE_LOADING, ABOUTPAGE_LOADING_SUCCES } from "../types";
import { aboutPage} from "../../data/aboutPage";

export default (dispatch) =>{
    dispatch({
        type: ABOUTPAGE_LOADING,
    })
     const data =  aboutPage
    
     dispatch({
         type: ABOUTPAGE_LOADING_SUCCES,
         payload: data
     })
}