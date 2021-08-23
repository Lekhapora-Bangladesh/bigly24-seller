import React from 'react';
import styles from '../styles/login.module.scss';
import LoginForm from '../components/auth/loginForm'


const LoginPage = () => {


  return (

    <div className={styles.container}>
      <div className={styles.header} >
        <img src="/img/logo.jpeg" alt="" style={{width:200}}/>
      </div>
    
    <div className={styles.login} id="login">
        <LoginForm />
    </div>

    </div>
  );
};

export default LoginPage;
