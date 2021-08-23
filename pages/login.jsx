import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { Form, Input, Button, Checkbox } from 'antd';
import styles from '../styles/login.module.scss';
import { signIn } from 'next-auth/client';
import { loginSuccess } from '~/store/auth/action';
import Axios from 'axios';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginPage = () => {
  const router = useRouter();
  const onFinish = async (values) => { 

    const result = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password : values.password
    });


    console.log(result);
    
    if (!result.error) {
      //set some auth state
      console.log('result' , result);
      loginSuccess(result.token);

      await router.replace('/');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (

    <div className={styles.container}>
      <div className={styles.header} >
        <img src="/img/logo.jpeg" alt="" style={{width:200}}/>
      </div>
    
    <div className={styles.login} id="login">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        className={styles.form}
        onFinishFailed={onFinishFailed}
      >

        {/* <div>
            <img src="/img/logo.jpeg" alt="" style={{width:250}}/>
        </div> */}

        <Form.Item
          label="Email"
          name="email"
          rules={[{ type: 'email', message: 'This Email is not valid!' }, { required: true, message: 'Please Provide an E-mail!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          {...tailLayout}
          name="remember"
          valuePropName="checked"
          className={styles.formWrapper}
        >
          <Checkbox className={styles.checkbox}>Remember Password</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout} className={styles.formWrapper}>
          <Button type="primary" htmlType="submit" className={styles.button}>
            Submit
          </Button>
        </Form.Item>

        <p style={{textAlign:'center'}}>Dont have a account? <Link href="/signup"> Signup from Here  </Link>  </p>

      </Form>
    </div>

    </div>
  );
};

export default LoginPage;
