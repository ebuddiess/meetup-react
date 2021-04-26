import React from 'react'
import classes from './Alert.module.css'


export default function Alert({ message}) {
    return (
        <div className={classes.alert}>
            { message }
        </div>
    ) 
}
