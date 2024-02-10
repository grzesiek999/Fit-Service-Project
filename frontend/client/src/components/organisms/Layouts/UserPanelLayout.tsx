import React from "react";
import { Outlet } from "react-router-dom";
import "../../../styles/index.scss";
import UserPanelMenu from "../UserPanel/Main/UserPanelMenu";



const UserPanelLyaout = () => {

    return (
      <div className="user-panel-layout-div-wrapper">
        <UserPanelMenu />
        <Outlet />
      </div>
    );
}

export default UserPanelLyaout;