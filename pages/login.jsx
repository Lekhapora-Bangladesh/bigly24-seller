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
    // console.log('Success:', values);
 

    const result = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password : values.password
    });

    // console.log(result[0]);

    // const result = await signIn('token', {
    //   redirect: false,
    //   email: responseObject.data.user.email,
    // });

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
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email Address!',
            },
          ]}
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

      <p>Dont have a account? <Link href="/signup"> Signup from Here  </Link>  </p>

        <Form.Item {...tailLayout} className={styles.formWrapper}>
          <Button type="primary" htmlType="submit" className={styles.button}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
