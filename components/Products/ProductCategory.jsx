import React from 'react';

const FormCreateCategory = ({ categoryData, onchangeFunc }) => {
  return (
    <form
      className="ps-form ps-form--new"
      action="index.html"
      method="get"
      style={{ transform: 'translate(-4.5rem)' }}
    >
      <div className="ps-form__content">
        <div className="form-group form-group--select">
          <label>Catagory</label>
          <div className="form-group__content">
            <select
              className="ps-select"
              title="Parent"
              name="CATID"
              onChange={(e) => onchangeFunc(e)}
            >
              <option value="1"> Select Catagory </option>
              {categoryData.map((category, index) => (
                <option value={category.CATID}>{category.CategoryName}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormCreateCategory;
