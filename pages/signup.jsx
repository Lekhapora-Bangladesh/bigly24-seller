import React from 'react'
import classes from '../styles/signup.module.scss'
import SignUpFrom from '../components/auth/signupForm'


const Signup = () => {
  return (
    <div>
      <div className={classes.header} >
        <img src="/img/logo.jpeg" alt="" style={{width:250}}/>
      </div>

      <div className={classes.container}>
        <p className={classes.formTitle}> Online Registration </p>
        <SignUpFrom />
      </div>

    </div>
  )
}

export default Signup
