import React, { useState } from 'react';
import classes from '../../styles/signup.module.scss'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useRouter } from 'next/router'
import 'antd/dist/antd.css';
import { Form, Input, Checkbox, Button } from 'antd';
import Axios from 'axios';
// import Modal from '../Utils/'
import Link from 'next/link'


const SignUpForm = () => {


  const [form] = Form.useForm();
  const [errors, setErrors] = useState([]);

  const onFinish = async (values) => {

    const responsData =  await Axios.post('https://api.bigly24.com/public/api/seller/registration' , values)

    if(responsData.status === 201) {
      console.log('Received values of form: ', responsData);
    }

    else{
      setErrors(responsData.data.errors ?  responsData.data.errors : []);

      console.log('Received values of form: ', responsData.errors);
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
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
      }}
      scrollToFirstError
    >
      <Form.Item name='name' label='Name' rules={[{ required: true, message: 'Please Provide a Name' }]} >
        <Input />
      </Form.Item>
      <Form.Item name='email' label='E-mail' rules={[{ type: 'email', message: 'This Email is not valid!' }, { required: true, message: 'Please Provide an E-mail!' }]} >
        <Input />
      </Form.Item>
      <Form.Item name='password' label='Password' rules={[{ required: true, message: 'Please Provide a Password' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item name='password_confirmation' label='Confirm Password' rules={[{ required: true, message: 'Please confirm your password!' }, ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) { return Promise.resolve(); }
          return Promise.reject(new Error('The two passwords that you entered do not match!'));
        }
      })]}>

        <Input.Password />
      </Form.Item>
      <Form.Item name='address' label='Address' rules={[{ required: true, message: 'Please Provide Your Address' }]}>
        <Input />
      </Form.Item>
      <Form.Item name='country' label='Country' rules={[{ required: true, message: 'Please Provide Your Country' }]}>
        <Input />
      </Form.Item>
      <Form.Item name='contact_number' label='Contact Number' rules={[{ required: true, message: 'Please Provide Phone Number' }]}>
        <Input />
      </Form.Item>
      <Form.Item name='nid' label='NID / Social Secuirty Number' rules={[{ required: true, message: 'Please Provide Your NID / Social Secuirty Number' }]}>
        <Input />
      </Form.Item>
      <Form.Item name='passport_number' label='Passport Number  ' rules={[{ required: false, message: '' }]}>
        <Input />
      </Form.Item>
      <Form.Item name='company_name' label='Company Name' rules={[{ required: true, message: 'Please Provide Your Company Name' }]}>
        <Input />
      </Form.Item>

      <Form.Item name='trade_license_number' label='Trade License Number' rules={[{ required: true, message: 'Please Provide Your Trade License Number' }]}>
        <Input />
      </Form.Item>
      <Form.Item name='tin_number' label='TIN Number' rules={[{ required: true, message: 'Please Provide Your TIN Number' }]}>

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
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>

      <p>Already Have an account? <Link href="/login">  Login  </Link>  </p>

    </Form>
  );
};

export default SignUpForm;
