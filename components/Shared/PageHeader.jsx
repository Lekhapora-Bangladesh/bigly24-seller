import React from 'react';
import { signOut } from 'next-auth/client';
import { useRouter } from 'next/router';

const HeaderDashboard = ({
  title = 'Dashboard',
  description = 'Everything here',
}) => {
  const logOutHandler = async (e) => {
    e.preventDefault();
    await signOut();
  };
  return (
    <header className="header--dashboard">
      <div className="header__left">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="header__center">
        <form className="ps-form--search-bar" action="index.html" method="get">
            <input
                className="form-control"
                type="text"
                placeholder="Search something"
            />
            <button>
                <i className="icon-magnifier"></i>
            </button>
        </form>
      </div>
      <div className="header__right">
        <a className="header__site-link" href="#" onClick={logOutHandler}>
          <span>Log Out</span>
          <i className="icon-exit-right"></i>
        </a>
      </div>
    </header>
  );
};

export default HeaderDashboard;