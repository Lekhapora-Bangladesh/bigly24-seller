import React, { useState } from 'react';
import { Checkbox, Divider } from 'antd';
import { useForm } from 'react-hook-form';
import Axios from 'axios';

const CustomOrder = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    //   Axios.post('http://localhost:4000/cnf/profile', {
    //     ...data,
    //     cnfServices : checkedList.toString() ,
    //     userType: session.user.image,
    //     userId: session.user.name,
    //   });
  };

  return (
    <form
      className="ps-form--account-settings"
      action="index.html"
      method="get"
    >
      <div className="row">
        <div className="col-sm-4">
          <div className="form-group">
            <label>Item Ref. No</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('itemRef')}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <label>Items</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('items')}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <label>Quntity</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('quntity')}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <label>Fabric dateless</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('fabricDateless')}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <label>Size</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('size')}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <label>Brand</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('brand')}
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="form-group">
            <label>Goods original</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('goodsOriginal', { required: true })}
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="form-group">
            <label>C-N Number</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('CN', { required: true })}
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="form-group">
            <label>R-N number</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('RN', { required: true })}
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="form-group">
            <label>Product market</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('productMarket')}
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="form-group">
            <label>Order Quntity</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('orderQuntity')}
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="form-group">
            <label>Shipment Quantity</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('shipmentQuantity')}
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="form-group">
            <label>Fob price</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('fobPrice')}
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="form-group">
            <label>Product Sell Cash Price</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('ProductSellCashPrice')}
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="form-group">
            <label> Carton Measurements</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('cartonMeasurements')}
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="form-group">
            <label>Carton Quntity</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('cartonQuntity', { required: true })}
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="form-group">
            <label>CBM</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('CBM')}
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="form-group">
            <label>Partial Allowed</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('partialAllowed', { required: true })}
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="form-group">
            <label>Remarks</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('remarks')}
            />
          </div>
        </div>

        <div className="col-sm-12">
          <br /> <br />
        </div>
      </div>
      <div className="ps-form__submit text-center">
        <button className="ps-btn ps-btn--gray mr-3">Cancel</button>
        <button onClick={handleSubmit(onSubmit)} className="ps-btn success">
          Add Product
        </button>
      </div>
    </form>
  );
};

export default CustomOrder;
