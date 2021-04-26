import React , {useContext} from 'react'
import MeetContext from '../context/MeetContext'
import MeetupItem from '../Components/Meetup/MeetupItem'




export default function Favourites() {

    const meetCtx = useContext(MeetContext)

    return (
        <div className="meetup">
           { meetCtx.totalFav>0 ? (meetCtx.fav.map (meetup => <MeetupItem meetup={meetup} key={meetup.id} /> )) : (<h4 style={{textAlign:"center",padding:"20px",width:"100%"}}>No Favourites</h4>)}
        </div>
    )
}
