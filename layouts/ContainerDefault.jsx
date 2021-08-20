import React from 'react';
import Head from 'next/head';

import FooterCopyright from './FooterCopyright';
import MenuSidebar from './MenuSidebar';

const ContainerDefault = ({ children, title }) => {
  let titleView;
  if (title !== undefined) {
    titleView = process.env.title + ' | ' + title;
  } else {
    titleView = process.env.title + ' | ' + process.env.titleDescription;
  }

  return (
    <div className="martfury-admin">
      <Head>
        <title>{titleView}</title>
      </Head>
      <main className="ps-main">
        <div className="ps-main__sidebar">
          <div className="ps-sidebar">
            <div className="ps-sidebar__top">
              <div className="ps-block--user-wellcome">
                <div className="ps-block__left">
                  <img src="/img/user/admin.jpg" alt="" />
                </div>
                <div className="ps-block__right">
                  <p>
                    Hello,<a href="#">Glointer</a>
                  </p>
                </div>
                <div className="ps-block__action">
                  <a href="#">
                    <i className="icon-exit"></i>
                  </a>
                </div>
              </div>
              <div className="ps-block--earning-count">
                <small>Earning</small>
                <h3>$12,560.55</h3>
              </div>
            </div>
            <div className="ps-sidebar__content">
              <div className="ps-sidebar__center">
                <MenuSidebar />
              </div>
            </div>
            <div className="ps-sidebar__footer">
              <FooterCopyright />
            </div>
          </div>
        </div>
        <div className="ps-main__wrapper">{children}</div>
      </main>
    </div>
  );
};

export default ContainerDefault;
