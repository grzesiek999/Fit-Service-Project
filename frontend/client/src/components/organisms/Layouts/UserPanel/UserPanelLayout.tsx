import React from "react";
import { Outlet } from "react-router-dom";
import UserPanelMenu from "../../../molecules/Layouts/UserPanel/UserPanelMenu";



const UserPanelLyaout = () => {

    return (
      <div className="user-panel-layout-div-wrapper">
        <UserPanelMenu />
        <Outlet />
      </div>
    );
}

export default UserPanelLyaout;