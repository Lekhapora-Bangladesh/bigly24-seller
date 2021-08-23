import React,{useState} from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import { Form, Input, Button, Checkbox , Alert} from 'antd';
import { signIn } from 'next-auth/client';
import { loginSuccess } from '~/store/auth/action';
import styles from '../../styles/login.module.scss';
import Spinner from '../Utils/spinner/spinner'

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


const LoginForm = () => {

    const [showError, setShowError] = useState(false)
    const [showLoading, setShowLoading] = useState(false)
    const router = useRouter();
    const onFinish = async (values) => { 
      
      setShowLoading(true)
      const result = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password : values.password
      });
  
  
      if (!result.error) {
        //set some auth state
        console.log('result' , result);
        setShowError(false)

        loginSuccess(result.token);
  
        await router.replace('/');

      }else{
        setShowError(true)
      }
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    return (
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

          {showError && 
            <Alert style={{marginBottom:25}} message="Invalid User Email Or Password." type="error" showIcon />
          }

        <Form.Item
          label={<label style={{ fontSize:20 }}>E-mail</label>}
          name="email"
          rules={[{ type: 'email', message: 'This Email is not valid!' }, { required: true, message: 'Please Provide an E-mail!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<label style={{ fontSize:20 }}>Password</label>}
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

        {
            showLoading ? 
                <Spinner /> 
                :      
                <Form.Item {...tailLayout} className={styles.formWrapper}>
                    <Button type="primary" htmlType="submit" className={styles.button}>
                        Submit
                    </Button>
                </Form.Item>

        }
        <p style={{textAlign:'center' , fontSize:16}}>Dont have a account? <Link href="/signup"> Signup from Here  </Link>  </p>

      </Form>
    )
}

export default LoginForm
