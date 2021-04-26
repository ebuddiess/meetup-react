import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import Types from './Types'


// eslint-disable-next-line 
export default(state,action) => {
    switch(action.type){
        case Types.GET_DATA : return { ...state , data : action.payload , loading:false } ;
        case Types.SET_LOADING :  return { ...state , loading:true };
        case Types.ADD_DATA :  return { ...state };
        case Types.SET_ERROR :  return { ...state , error : action.payload };
        case Types.CLEAR_ERROR :  return { ...state , error:null };
        case Types.SET_INFO :  return { ...state  , info : action.payload};
        case Types.CLEAR_INFO :  return { ...state  , info:null};
        case Types.ADD_FAV :  return { ...state  , fav : action.payload ,
            };
        case Types.REMOVE_FAV :  return { ...state  , fav : action.payload};
        case Types.UPDATE_FAV_LEN :  return { ...state  , totalFavourites : action.payload}


        default : return state ;
    }
}