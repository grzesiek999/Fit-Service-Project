import React from 'react';
import { Outlet } from "react-router-dom";
import LayoutMenu from '../components/organisms/Layout/LayoutMenu';


const Layout = () => {

  return (
    <>
      <LayoutMenu />
      <Outlet />
    </>
  )
};

export default Layout;