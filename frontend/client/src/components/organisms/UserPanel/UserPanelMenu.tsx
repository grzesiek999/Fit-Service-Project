import React from "react";
import WelcomeUserSpan from "../../atoms/spans/WelcomeUserSpan";
import UserSettingsList from "../../atoms/lists/UserSettingsList";
import "../../../styles/index.scss";


const UserPanelMenu = () => {

    return (
        <div className="user-panel-menu-div-wrapper">
            <WelcomeUserSpan />
            <UserSettingsList />
        </div>
    );
}

export default UserPanelMenu;