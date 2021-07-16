import React, { useEffect } from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { getSession } from 'next-auth/client';
import { Select } from 'antd';
import { connect, useDispatch } from 'react-redux';

import ContainerDefault from '~/layouts/ContainerDefault';

import TableOrdersItems from '~/components/Orders/TableOrdersItems';

import HeaderDashboard from '~/components/Shared/PageHeader';
import Pagination from '~/components/Utils/Pagination';

import { toggleDrawerMenu } from '~/store/app/action';

const { Option } = Select;
const OrdersPage = () => {
  const data = [
    {
      OrderID: 'MP-156',
      CustomerName: 'Jenny Simmonds',
      phone: '(+921) 211-32-1145',
      review: '5',
      orderDate: '15-11-2014',
      CustomerRecommandation: true,
    },
    {
      OrderID: 'WP-180',
      CustomerName: 'Ammara Molloy',
      phone: '(+921) 916-971-217',
      review: '3',
      orderDate: '11-10-2018',
      CustomerRecommandation: true,
    },
    {
      OrderID: 'WP-451',
      CustomerName: 'Anisa Forster',
      phone: '(+921) 319-176-113',
      review: '4',
      orderDate: '15-06-2020',
      CustomerRecommandation: true,
    },
    {
      OrderID: 'UP-586',
      CustomerName: 'Hashir Wilson',
      phone: '(+921) 393-112-298',
      review: '2',
      orderDate: '15-11-2014',
      CustomerRecommandation: false,
    },
    {
      OrderID: 'UP-985',
      CustomerName: 'Grover Sampson',
      phone: '(+921) 393-872-137',
      review: '5',
      orderDate: '11-10-2018',
      CustomerRecommandation: true,
    },
    {
      OrderID: 'BP-454',
      CustomerName: 'Nelson Mckeown',
      phone: '(+921) 393-872-998',
      review: '2',
      orderDate: '11-10-2018',
      CustomerRecommandation: false,
    },
    {
      OrderID: 'GP-786',
      CustomerName: 'Zunaira Akhtar',
      phone: '(+921) 393-872-145',
      review: '5',
      orderDate: '15-06-2020',
      CustomerRecommandation: true,
    },
    {
      OrderID: 'UP-906',
      CustomerName: 'Natan Kramer',
      phone: '(+921) 293-872-145',
      review: '1',
      orderDate: '11-10-2018',
      CustomerRecommandation: false,
    },
    {
      OrderID: 'MP-952',
      CustomerName: 'Jesse Pollard',
      phone: '(+921) 291-32-145',
      review: '4',
      orderDate: '15-06-2020',
      CustomerRecommandation: true,
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDrawerMenu(false));
  }, []);
  return (
    <ContainerDefault>
      <HeaderDashboard title="Orders" description="Martfury Orders Listing" />
      <section className="ps-items-listing">
        <div className="ps-section__header simple">
          <div className="ps-section__filter">
            <form className="ps-form--filter" action="index.html" method="get">
              <div className="ps-form__left">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search..."
                  />
                </div>
                <div className="form-group">
                  <Select
                    placeholder="Status"
                    className="ps-ant-dropdown"
                    listItemHeight={20}
                  >
                    <Option value="active">Active</Option>
                    <Option value="in-active">InActive</Option>
                  </Select>
                </div>
              </div>
              <div className="ps-form__right">
                <button className="ps-btn ps-btn--gray">
                  <i className="icon icon-funnel mr-2"></i>
                  Filter
                </button>
              </div>
            </form>
          </div>
          <div className="ps-section__actions">
            {/* <Link href="/products/create-product">
              <a className="ps-btn success">
                <i className="icon icon-plus mr-2"></i>New Order
              </a>
            </Link> */}
            <a className="ps-btn ps-btn--gray">
              <i className="icon icon-download2 mr-2"></i>
              <ExportToExcel apiData={data} fileName={'QC-Orders'} />
            </a>
          </div>
        </div>
        <div className="ps-section__content">
          <TableOrdersItems />
        </div>
        <div className="ps-section__footer">
          <p>Show 10 in 30 items.</p>
          <Pagination />
        </div>
      </section>
    </ContainerDefault>
  );
};
export default connect((state) => state.app)(OrdersPage);

const ExportToExcel = ({ apiData, fileName }) => {
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <button
      style={{ background: 'transparent', border: 'none' }}
      onClick={(e) => {
        e.preventDefault();
        exportToCSV(apiData, fileName);
      }}
    >
      Export
    </button>
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
