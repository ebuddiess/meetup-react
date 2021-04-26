import React , {useContext} from 'react'
import {Link} from 'react-router-dom'
import classes from './Nav.module.css'
import meetContext from '../../context/MeetContext'





export default function Nav() {

    const meetCtx = useContext(meetContext)

    return (
        <div className={classes.navbar}>
            <div className={classes.meetup}>CODER MEETUP</div>
           <nav>
           <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/new">New Meetup</Link></li>
                <li><Link to="/favourites">Favourites { meetCtx.totalFav>0 && <span className={classes.badge}>{meetCtx.totalFav}</span> } </Link></li>
            </ul>
           </nav>
        </div>
    )
}
