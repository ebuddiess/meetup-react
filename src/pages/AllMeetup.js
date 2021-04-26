import MeetupItem from '../Components/Meetup/MeetupItem'
import  '../Components/Meetup/MeetupItem.modules.css'
import {useEffect , useState , useContext} from 'react'
import MeetContext from '../context/MeetContext'


export default function AllMeetup() {
    const meetCtx = useContext(MeetContext)


   
    useEffect(() => {
        console.log("Req")
        meetCtx.getData()
    }, [])

    if(meetCtx.data.length === 0 && !meetCtx.loading){
        return <h4> NO DATA </h4>
    }

    if(meetCtx.loading){
        return <h4>Loading .........</h4>
    }

    return (
        <div className="meetup">
           { meetCtx.data.map (meetup => <MeetupItem meetup={meetup} key={meetup.id} /> )}
        </div>
    )
}
