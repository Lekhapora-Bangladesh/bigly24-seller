import React, { useEffect } from 'react';
import { getSession ,useSession } from 'next-auth/client';

import Layout from '~/layouts/ContainerDefault';
import PageHeader from '~/components/Shared/PageHeader';

import CardRecentOrders from '~/components/Dashboard/CardRecentOrders';
import CardSaleReport from '~/components/Dashboard/CardSaleReport';
import CardEarning from '~/components/Dashboard/CardEarning';
import CardStatics from '~/components/Dashboard/CardStatics';
import CardTopCountries from '~/components/Dashboard/CardTopCountries';

import { useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';

const Index = ({session}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDrawerMenu(false));
  }, []);

  // const [session , loading] = useSession()

  console.log( 'df' ,  session);

  return (
    <Layout title="Dashboard">
      <PageHeader />
      <section className="ps-dashboard" id="homepage">
        <div className="ps-section__left">
          <div className="row">
            <div className="col-xl-8 col-12">
              <CardSaleReport />
            </div>
            <div className="col-xl-4 col-12">
              <CardEarning />
            </div>
          </div>
          <CardRecentOrders />
        </div>
        <div className="ps-section__right">
          <CardStatics />
          <CardTopCountries />
        </div>
      </section>
{ session &&  console.log(session.user)}
    </Layout>
  );
};

export async function getServerSideProps(context) { 
  const session = await getSession({ req: context.req });
  if (!session) { 
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default Index;
