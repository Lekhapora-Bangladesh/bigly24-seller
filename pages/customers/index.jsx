import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getSession } from 'next-auth/client';

import ContainerDefault from '../../layouts/ContainerDefault';

import TableCustomerItems from '~/components/Customers/TableCustomerItems';

import HeaderDashboard from '~/components/Shared/PageHeader';
import FormSearchSimple from '~/components/Utils/FormSearchSimple';
import Pagination from '~/components/Utils/Pagination';

import { toggleDrawerMenu } from '~/store/app/action';

const CustomersPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDrawerMenu(false));
  }, []);
  return (
    <ContainerDefault title="Customers">
      <HeaderDashboard
        title="Customers"
        description="Martfury Customer Listing"
      />
      <section className="ps-items-listing">
        <div className="ps-section__header simple">
          <div className="ps-section__filter">
            <FormSearchSimple />
          </div>
          <div className="ps-section__actions">
            <a className="ps-btn success" href="#">
              <i className="icon icon-plus mr-2"></i>Add Customer
            </a>
          </div>
        </div>
        <div className="ps-section__content">
          <TableCustomerItems />
        </div>
        <div className="ps-section__footer">
          <p>Show 10 in 30 items.</p>
          <Pagination />
        </div>
      </section>
    </ContainerDefault>
  );
};

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

export default connect((state) => state.app)(CustomersPage);
