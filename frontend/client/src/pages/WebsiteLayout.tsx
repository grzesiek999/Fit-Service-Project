import React from 'react';
import { Outlet } from "react-router-dom";
import WebsiteLayoutDiv from '../components/organisms/Layout/WebsiteLayoutDiv';
import Footer from '../components/organisms/Footer/Footer';


const WebsiteLayout = () => {

  return (
    <>
      <WebsiteLayoutDiv />
      <Outlet />
      <Footer />
    </>
  )
};

export default WebsiteLayout;