import React from "react";
import UserPanelMenu from "../organisms/UserPanel/UserPanelMenu";
import UserPanelSettings from "../organisms/UserPanel/UserPanelSettings";


const UserSettingsPageTemplate = () => {

    return (
        <div className="user-panel-page-template-div-wrapper">
            <UserPanelMenu />
            <UserPanelSettings />
        </div>
    );
}

export default UserSettingsPageTemplate;