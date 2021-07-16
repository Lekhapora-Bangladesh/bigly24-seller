import React from 'react';
import Head from './Head';
import HeaderMobile from './HeaderMobile';
import DrawerMenu from './DrawerMenu';

const DefaultLayout = ({ children }) => {
  return (
    <div id="martfury">
      <Head />
      <HeaderMobile />
      {children}
      <DrawerMenu />
      <div id="loader-wrapper">
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    </div>
  );
};

export default DefaultLayout;
