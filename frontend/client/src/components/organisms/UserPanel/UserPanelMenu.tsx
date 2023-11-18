import React from "react";
import WelcomeUserSpan from "../../atoms/spans/WelcomeUserSpan";
import "../../../styles/index.scss";
import UserPanelNav from "../../molecules/Layout/UserPanelNav";


const UserPanelMenu = () => {

    return (
        <div className="user-panel-menu-div-wrapper">
            <WelcomeUserSpan />
            <div className="user-setting-nav-div-wrapper">
                <div>Panel Użytkownika</div>
                <UserPanelNav />
            </div>
        </div>
    );
}

export default UserPanelMenu;