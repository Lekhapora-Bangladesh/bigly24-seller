import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { getSession, useSession } from 'next-auth/client';
import { connect, useDispatch } from 'react-redux';

import ContainerDefault from '~/layouts/ContainerDefault';
import PageHeader from '~/components/Shared/PageHeader';

import FormAccountSettings from '~/components/Settings/FormAccountSettings';
import ProfileInformation from '~/components/Settings/ProfileInformation';

import { toggleDrawerMenu } from '~/store/app/action';

const SettingsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDrawerMenu(false));
  }, []);

  const [settingsInfo, setSettingsInfo] = useState({});
  const [session] = useSession();
  console.log(session);
  useEffect(async () => {
    const settingsInfo = await Axios.post(
      'http://localhost:4000/seller/profile/settings',
      {
        userId: 'PAIKQC#903f10ac',
      },
    );
    setSettingsInfo(settingsInfo.data);
  }, []);

  return (
    <ContainerDefault title="Settings">
      <PageHeader title="Settings" description="Seller Profile Settings" />
      <section className="ps-dashboard ps-items-listing">
        <div className="ps-section__left">
          <section className="ps-card">
            <div className="ps-card__header">
              <h4>Account Settings</h4>
            </div>
            <div className="ps-card__content">
              <FormAccountSettings />
            </div>
          </section>
        </div>
        <div className="ps-section__right">
          <ProfileInformation settingsInfo={settingsInfo} />
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

export default connect((state) => state.app)(SettingsPage);
