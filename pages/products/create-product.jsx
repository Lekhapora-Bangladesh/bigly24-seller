import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import { getSession, useSession } from 'next-auth/client';

import ContainerDefault from '~/layouts/ContainerDefault';

import ProductCategory from '~/components/Products/ProductCategory';
import UploadImgSection from '~/components/Products/ImageUpload';

import HeaderDashboard from '~/components/Shared/PageHeader';

import { toggleDrawerMenu } from '~/store/app/action';
import CustomOrder from '~/components/Products/AddProduct';

const CreateProductPage = () => {
  const [session] = useSession();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDrawerMenu(false));
  }, []);

  const [categories, setCategories] = useState([]);
  // useEffect(async () => {
  //   const categories = await Axios.get('http://localhost:4000/category');
  //   setCategories(categories.data);
  // }, []);
  const [ProductDetails, setProductDetails] = useState({});

  const handleChange = (e) => {
    let value = e.target.value;
    setProductDetails({ ...ProductDetails, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:4000/products', {
      SupplierID: session && session.user.name,
      ...ProductDetails,
    }).then((response) => {});
  };

  return (
    <ContainerDefault title="Create new product">
      <HeaderDashboard
        title="Create Product"
        description="Martfury Create New Product "
      />
      <section className="ps-new-item">
        <CustomOrder />
        {/* <form className="ps-form ps-form--new-product" action="" method="get">
          <div className="ps-form__content"> */}
        {/* <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <figure className="ps-block--form-box">
                  <figcaption>General</figcaption>
                  <div className="ps-block__content">
                    <div className="form-group">
                      <label>
                        Product Name<sup>*</sup>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter product name..."
                        name="ProductName"
                        onBlur={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Product Id<sup>*</sup>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter product Reference..."
                        name="PID"
                        onBlur={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Product Summary<sup>*</sup>
                      </label>
                      <text-area
                        className="form-control"
                        rows="6"
                        name="ProductDescription"
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter product description..."
                      ></text-area>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                      }}
                    >
                      <div className="form-group">
                        <label>
                          Regular Price<sup>*</sup>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                          name="MRP"
                          onBlur={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Sale<sup>*</sup>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                          name="SalePrice"
                          onBlur={(e) => handleChange(e)}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                      }}
                    >
                      <div className="form-group">
                        <label>
                          UnitPrice<sup>*</sup>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                          name="UnitPrice"
                          onBlur={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Quantity Per Unit<sup>*</sup>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                          name="QuantityPerUnit"
                          onBlur={(e) => handleChange(e)}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                      }}
                    >
                      <div
                        className="form-group"
                        style={{ marginLeft: '-2rem' }}
                      >
                        <label>
                          Customer Review <sup>*</sup>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                          name="CustomerReview"
                          onBlur={(e) => handleChange(e)}
                        />
                      </div>

                      <ProductCategory
                        categoryData={categories}
                        onchangeFunc={handleChange}
                      />
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                      }}
                    >
                      <div className="form-group">
                        <label>
                          Size<sup>*</sup>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                          name="Size"
                          onBlur={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Color<sup>*</sup>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                          name="Color"
                          onBlur={(e) => handleChange(e)}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                      }}
                    >
                      <div className="form-group">
                        <label>
                          Available Size<sup>*</sup>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                          name="AvailableSize"
                          onBlur={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Available Color<sup>*</sup>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                          name="AvailableColor"
                          onBlur={(e) => handleChange(e)}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                      }}
                    >
                      <div className="form-group">
                        <label>
                          Unit In Stock <sup>*</sup>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                          name="UnitInStock"
                          onBlur={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Unit Weight <sup>*</sup>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                          name="UnitWeight"
                          onBlur={(e) => handleChange(e)}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>
                        Product Description<sup>*</sup>
                      </label>
                      <textarea
                        className="form-control"
                        rows="6"
                        name="ProductDescription"
                        onBlur={(e) => handleChange(e)}
                      ></textarea>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <figure className="ps-block--form-box">
                  <figcaption>Product Images</figcaption>
                  <div className="ps-block__content">
                    <UploadImgSection
                      setProductDetails={setProductDetails}
                      ProductDetails={ProductDetails}
                    />

                    <div className="form-group">
                      <label>Video (optional)</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter video URL"
                        name="VideoURL"
                        onBlur={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </figure>
                <figure className="ps-block--form-box">
                  <figcaption>Inventory</figcaption>
                  <div className="ps-block__content">
                    <div className="form-group">
                      <label>
                        SKU<sup>*</sup>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder=""
                        name="SKUID"
                        onBlur={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="form-group form-group--select">
                      <label>Status</label>
                      <div className="form-group__content">
                        <select
                          className="ps-select"
                          title="Status"
                          name="ProductStatus"
                          onBlur={(e) => handleChange(e)}
                        >
                          <option value="In Stock">In Stock</option>
                          <option value="Stock Out">Stock Out</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </figure>
                <figure className="ps-block--form-box">
                  <figcaption>Meta</figcaption>
                  <div className="ps-block__content">
                    <div className="form-group form-group--select">
                      <label>Brand</label>
                      <div className="form-group__content">
                        <select className="ps-select" title="Brand">
                          <option value="1">Brand 1</option>
                          <option value="2">Brand 2</option>
                          <option value="3">Brand 3</option>
                          <option value="4">Brand 4</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        Tags <sup>*</sup>{' '}
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="tags"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
          <div className="ps-form__bottom">
            <nav className="ps-btn ps-btn--black">
              {' '}
              <a style={{ color: 'white' }} href="/products">
                Back
              </a>
            </nav>

            <button className="ps-btn ps-btn--gray">Cancel</button>
            <button className="ps-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form> */}
      </section>
    </ContainerDefault>
  );
};
export default connect((state) => state.app)(CreateProductPage);

// export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req });
//   if (!session) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: { session },
//   };
// }
