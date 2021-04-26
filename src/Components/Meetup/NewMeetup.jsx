import React , {useRef ,  useContext} from 'react'
import classes from './NewMeetup.module.css'
import Alert from '../UI/Alert'
import MeetContext from '../../context/MeetContext'




const  NewMeetup = (props) => {
    const title = useRef("")
    const desc = useRef("")
    const address = useRef("")
    const url = useRef("")


    const meetCtx = useContext(MeetContext)

const onsubmit = (e) => {
const titletxt =  title.current.value
 const desctxt=  desc.current.value
 const urltxt =  url.current.value
const addresstxt = address.current.value

const meetupdata = {
    titletxt ,
    desctxt,
    urltxt,
    addresstxt
}
           e.preventDefault()
            meetCtx.addData(meetupdata)
            title.current.value = ""
            desc.current.value  = ""
            url.current.value = ""
            address.current.value = ""
        }
    

    return (
        <div className={classes.container}>
        <form action="/" onSubmit={onsubmit}>
        { ( meetCtx.error!==null ) &&  ( <Alert  message={meetCtx.error} /> )}
        { ( meetCtx.info!==null )  &&  ( <Alert  message={meetCtx.info} /> )}
          <div className={classes.row}>
              <label htmlFor="meetuptitle">Meetup Title</label>
            </div>
            <div>
              <input type="text" id="meetuptitle" name="meetuptitle" placeholder="MEETUP TITLE"  ref={title}/>
            </div>

          <div className={classes.row}>
            <div>
              <label htmlFor="meetupurl">Meetup URL</label>
            </div>
            <div>
              <input type="text" id="meetupurl" name="meetupurl" placeholder="MEETUP URL" ref={url}/>
            </div>
          </div>

          <div className={classes.row}>
            <div>
              <label htmlFor="meetupaddress">Meetup address</label>
            </div>
            <div>
              <input type="text" id="meetupaddress" name="meetupaddress" placeholder="MEETUP address" ref={address} />
            </div>
          </div>

          <div className={classes.row}>
            <div>
              <label htmlFor="meetupdescription">Meetup description</label>
            </div>
            <div>
              <textarea row="4" type="text" id="meetupdescription" name="meetupdescription" placeholder="MEETUP description" ref={desc}/>
            </div>

            <div className={classes.row}>
            <input type="submit" value="Submit" />
             </div>
            
          </div>
        </form>
      </div>
    )
    
}

export default NewMeetup