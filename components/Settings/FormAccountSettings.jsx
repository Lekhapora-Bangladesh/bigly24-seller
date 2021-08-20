import Axios from 'axios';
import React, { useState } from 'react';
import { getSession, useSession } from 'next-auth/client';

import { useForm } from 'react-hook-form';

const FormAccountSettings = () => {
  const { register, handleSubmit } = useForm();
  
  const [session] = useSession();

  const onSubmit = (data) => {
    // Axios.post('http://localhost:4000/seller/profile', {
    //   ...data,
    //   userType: session && session.user.image,
    //   userId: session && session.user.name,
    //   // userId: 'SELL4520',
    //   // userType : 'SELLER'
    // });
  };
  return (
    <form
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
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Company Name</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('companyName')}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Phone Number</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('phone')}
            />
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
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>City</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('city')}
            />
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
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <label>Payment Method</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('paymentMethod')}
            />
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <label>Type OF Goods</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('typeOfGoods')}
            />
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

export default FormAccountSettings;
