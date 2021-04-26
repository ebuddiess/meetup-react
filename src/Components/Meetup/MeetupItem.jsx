import React , {useContext , useState} from 'react'
import  './MeetupItem.modules.css'
import MeetContext from '../../context/MeetContext'
import Favourites from '../../pages/Favourite'





export default function MeetupItem({meetup}) {
    const meetCtx = useContext(MeetContext)

    const isFavourite = meetCtx.isFavourite(meetup)
    return (
            <div className="meetup-outer">
           <img src={meetup.image} alt={meetup.title}/>
          <h4 className="title">{meetup.title}</h4>
           <div className="meetup-info">
               <h4>{meetup.address}</h4>
               <h4>{meetup.description}</h4>
           </div>
           <div className="option">
            { isFavourite ? <button onClick={() => meetCtx.removeFavourtie(meetup.id)}> REMOVE FAVOURITE</button> : 
             <button onClick={() => meetCtx.makeFavourtie(meetup)}>FAVOURITE</button> }
           </div>
        </div>
    )
}
