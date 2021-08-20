import React, { useState } from 'react';
import classes from '../../styles/signup.module.scss'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object().shape({
  name: yup.string().required(),
  company_name: yup.string().required(),
  contact_number : yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
  confirm_password: yup.string().min(8).max(32).required(),
  
  address : yup.string().required(),
  passport_number : yup.string().required(),
  trade_license_number : yup.string().required(),
  tin_number : yup.string().required(), 
  nid : yup.string().required(),


});  

const SignUpForm = () => {

  // const { register, handleSubmit } = useForm();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {console.log(data);}

  return (
    <form
      style={{textAlign:'center', width:'60%' , paddingTop:30 , margin: '0 auto'}}
      className="ps-form--account-settings"
      action="index.html"
      method="get"
    >
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('name')}
            />
            <p className={classes.errorMessage}>{errors.name?.message}</p>

          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Company Name</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('company_name')}
            />
            <p className={classes.errorMessage}>{errors.company_name?.message}</p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Contact Number</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('contact_number')}
            />
            <p className={classes.errorMessage}>{errors.contact_number?.message}</p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('email')}
            />
            <p className={classes.errorMessage}>{errors.email?.message}</p>

          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('password')}
            />
            <p className={classes.errorMessage}>{errors.password?.message}</p>

          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('confirm_password')}
            />
            <p className={classes.errorMessage}>{errors.confirm_password?.message}</p>

          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Address</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('address')}
            />
            <p className={classes.errorMessage}>{errors.address?.message}</p>

          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <label>Country</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('country')}
            />
            <p className={classes.errorMessage}>{errors.country?.message}</p>

          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <label>Passport Number </label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('passport_number')}
            />
            <p className={classes.errorMessage}>{errors.passport_number?.message}</p>

          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <label>Trade License Number</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('trade_license_number')}
            />
          </div>
        </div>
          <p className={classes.errorMessage}>{errors.trade_license_number?.message}</p>


        <div className="col-sm-6">
          <div className="form-group">
            <label>Tin Number</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('tin_number')}
            />
            <p className={classes.errorMessage}>{errors.tin_number?.message}</p>

          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <label>NID</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('nid')}
            />
              <p className={classes.errorMessage}>{errors.nid?.message}</p>

          </div>
        </div>

      </div>
      <div className="ps-form__submit text-center">
        <button className="ps-btn ps-btn--gray mr-3">Cancel</button>
        <button onClick={handleSubmit(onSubmit)} className="ps-btn success">
          Update Profile
        </button>
      </div>
    </form>
  );
};

export default SignUpForm