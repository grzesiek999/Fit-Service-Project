import React from "react";
import UserPanelSettings from "../organisms/UserPanel/AccountSettings/UserPanelSettings";
import "../../styles/index.scss";


const UserSettingsPageTemplate = () => {

    return (
        <div className="user-settings-page-template-div-wrapper">
            <UserPanelSettings />
        </div>
    );
}

export default UserSettingsPageTemplate;