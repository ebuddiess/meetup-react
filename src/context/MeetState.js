import React ,  { useReducer } from 'react'
import MeetContext from './MeetContext'
import MeetReducer from './MeetReducer'
import types from './Types'


const MeetState = props => {

const initalState = {
    data : [],
    loading : false ,
    error : null ,
    info : null ,
    fav : [] ,
    totalFavourites : 0 ,
}

const [state, dispatch] = useReducer(MeetReducer, initalState) 



const makeFavourtie = (meetup) => {
    dispatch({type:types.ADD_FAV , payload : [ ...state.fav , meetup ]})
    dispatch({type:types.UPDATE_FAV_LEN , payload : state.fav.length+1})

}


const removeFavourtie = (id) => {
    const data = state.fav.filter (fav => fav.id !== id)
    dispatch({type:types.REMOVE_FAV , payload : data})
    dispatch({type:types.UPDATE_FAV_LEN , payload : state.fav.length-1})
}

const isFavourite = (meetup) => {
    const {id} = meetup
    return state.fav.some(fav => fav.id === id)
}

const getData = async() => {
    dispatch({type:types.SET_LOADING})   
    const res = await fetch('https://meetup-demo-30ef2-default-rtdb.firebaseio.com/meetup.json')
    const resdata  = await res.json()
    const meetup = []
    for(const key in resdata){
        meetup.push({
           id : key ,
           title : resdata[key].titletxt ,
           description : resdata[key].desctxt ,
           image : resdata[key].urltxt ,
           address: resdata[key].addresstxt ,
       })
    }
    dispatch({type:types.GET_DATA , payload : meetup})
   }

   const addData = (data) => {
       console.log(data)
    if(data.titletxt === "" || data.desctxt === "" || data.urltxt === "" || data.addresstxt === "" ){
        dispatch({type:types.SET_ERROR , payload : "VALUES MISSING"})
        setTimeout( ()=>  dispatch({type:types.CLEAR_ERROR}) ,2000)

     }else{
         dispatch({type:types.SET_INFO , payload : "ADDED SUCCESSFULLY"})
         setTimeout( ()=> 
         dispatch({type:types.CLEAR_INFO})
         , 2000)
         dispatch({type : types.ADD_DATA})
    fetch('https://meetup-demo-30ef2-default-rtdb.firebaseio.com/meetup.json',{
      method : "POST",
      body : JSON.stringify(data),
      headers : {
        'Content-Type' : 'application/json'
      }
    })

         
     }
    

  }


return (
    <MeetContext.Provider value= {{ removeFavourtie , totalFav :  state.totalFavourites , isFavourite , data : state.data , loading:state.loading ,  getData  , fav:state.fav ,  addData , makeFavourtie, error : state.error , info : state.info}} >  {props.children} </MeetContext.Provider>
) 
}

export default MeetState 