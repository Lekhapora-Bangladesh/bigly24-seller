import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import { signOut , useSession  } from 'next-auth/client';


const HeaderMobile = ({ isDrawerMenu } ) => {
    // const HeaderMobile = ({ isDrawerMenu }) => {
    // const dispatch = useDispatch();
    // const handleOpenDrawer = () => {
    //     dispatch(toggleDrawerMenu(true));
    // };

    const logOutHandler = async (e) => {
        e.preventDefault();
        await signOut();
      };

      const [ session, loading ] = useSession()

    console.log(session);
    return (
        <header className="header--mobile">
            <div className="header__left">
                <button className="ps-drawer-toggle" 
                // onClick={handleOpenDrawer}
                >
                    <i className="icon icon-menu" style={{color:'#fff'}}></i>
                </button>
                <img src="" alt="" />
            </div>
            <div className="header__center">
                <a className="ps-logo" href="#">
                    <img src="/img/logo.jpeg" alt="" />
                </a>
            </div>
            <div className="header__right">
                <a className="header__site-link" onClick={logOutHandler}>
                    <i className="icon-exit-right" style={{color:'#fff'}}></i>
                </a>
            </div>
        </header>
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

export default connect((state) => state.app)(HeaderMobile);


