import React from 'react';
import { Outlet } from "react-router-dom";
import WebsiteLayoutDiv from '../components/organisms/Layout/WebsiteLayoutDiv';


const WebsiteLayout = () => {

  return (
    <>
      <WebsiteLayoutDiv />
      <Outlet />
    </>
  )
};

export default WebsiteLayout;