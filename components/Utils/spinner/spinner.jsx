import React from 'react'
import classes from './spinner.module.scss'

const Spinner = () => {
    return (
        <div className={classes.container} >
            <svg className={classes.spinner} width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle  className={classes.path} fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
        </div>
    )
}

export default Spinner
