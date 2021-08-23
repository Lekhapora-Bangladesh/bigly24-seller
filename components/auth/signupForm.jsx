import React, { useState } from 'react';
import classes from '../../styles/signup.module.scss'
import { useRouter } from 'next/router'
import 'antd/dist/antd.css';
import { Form, Input, Checkbox, Button } from 'antd';
import Axios from 'axios';
import Spinner from '../Utils/spinner/spinner'

import Link from 'next/link'
import { signIn } from 'next-auth/client';
import { loginSuccess } from '~/store/auth/action';



const SignUpForm = () => {

  const [showLoading, setShowLoading] = useState(false)
  const [form] = Form.useForm();
  const [errors, setErrors] = useState([]);

  const onFinish = async (values) => {

    setShowLoading(true)
    const responsData =  await Axios.post('https://api.bigly24.com/public/api/seller/registration' , values)

    if(responsData.status === 201) {
      console.log('Received values of form: ', responsData);
      const result = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password : values.password
      });

      if (!result.error) {
        //set some auth state
        console.log('result' , result);
        loginSuccess(result.token);
  
        await router.replace('/');
      }
    }

    else{
      setErrors(responsData.data.errors ?  responsData.data.errors : []);

      console.log('Received values of form: ', responsData);
    }
  };


  const router = useRouter()



  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };


  return (

    <div className={classes.formHolder}>

    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
      }}
      scrollToFirstError
      
    >
      <Form.Item name='name' label={<label style={{ fontSize:20 }}>Name</label>} rules={[{ required: true, message: 'Please Provide a Name' }]} >
        <Input />
      </Form.Item>
      <Form.Item name='email' label={<label style={{ fontSize:20 }}>E-mail</label>} rules={[{ type: 'email', message: 'This Email is not valid!' }, { required: true, message: 'Please Provide an E-mail!' }]} >
        <Input />
      </Form.Item>
      <Form.Item name='password' label={<label style={{ fontSize:20 }}>Password</label>} rules={[{ required: true, message: 'Please Provide a Password' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item name='password_confirmation' label={<label style={{ fontSize:20 }}>Confirm Password</label>} rules={[{ required: true, message: 'Please confirm your password!' }, ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) { return Promise.resolve(); }
          return Promise.reject(new Error('The two passwords that you entered do not match!'));
        }
      })]}>

        <Input.Password />
      </Form.Item>
      <Form.Item name='address' label={<label style={{ fontSize:20 }}>Address</label>} rules={[{ required: true, message: 'Please Provide Your Address' }]}>
        <Input />
      </Form.Item>
      <Form.Item name='country' label={<label style={{ fontSize:20 }}>Country</label>} rules={[{ required: true, message: 'Please Provide Your Country' }]}>
        <Input />
      </Form.Item>
      <Form.Item name='contact_number' label={<label style={{ fontSize:20 }}>Contact Number</label>} rules={[{ required: true, message: 'Please Provide Phone Number' }]}>
        <Input />
      </Form.Item>
      <Form.Item name='nid' label={<label style={{ fontSize:20 }}>NID / Social Secuirty Number</label>} rules={[{ required: true, message: 'Please Provide Your NID / Social Secuirty Number' }]}>
        <Input />
      </Form.Item>
      <Form.Item name='passport_number' label={<label style={{ fontSize:20 }}>Passport Number</label>} rules={[{ required: false, message: '' }]}>
        <Input />
      </Form.Item>
      <Form.Item name='company_name' label={<label style={{ fontSize:20 }}>Company Name</label>} rules={[{ required: true, message: 'Please Provide Your Company Name' }]}>
        <Input />
      </Form.Item>

      <Form.Item name='trade_license_number' label={<label style={{ fontSize:20 }}>Trade License Number</label>} rules={[{ required: true, message: 'Please Provide Your Trade License Number' }]}>
        <Input />
      </Form.Item>
      <Form.Item name='tin_number' label={<label style={{ fontSize:20 }}>TIN Number</label>} rules={[{ required: true, message: 'Please Provide Your TIN Number' }]}>

        <Input />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
         <span style={{fontSize:16}} >I have read the <a href="">agreement</a></span> 
        </Checkbox>
      </Form.Item>


      {
            showLoading ? 
                <Spinner /> 
                : 

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" style={{fontSize:20 , padding:'20px 50px' , lineHeight:0 , background:"#593131 !important"}}>
          Register
        </Button>
      </Form.Item>
}

    </Form>

      <p style={{textAlign:'center' , transform: 'translateX(-4rem)' ,fontSize:16}}>Already Have an account? <Link href="/login">  Login  </Link>  </p>

    </div>
  );
};

export default SignUpForm;
