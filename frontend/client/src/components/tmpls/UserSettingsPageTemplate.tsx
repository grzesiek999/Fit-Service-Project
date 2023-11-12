import React from "react";
import UserPanelMenu from "../organisms/UserPanel/UserPanelMenu";
import UserPanelSettings from "../organisms/UserPanel/UserPanelSettings";


type UserSettingsPageTemplateProps = {
    email: string;
    name: string;
}

const UserSettingsPageTemplate = ({email, name}: UserSettingsPageTemplateProps) => {

    return (
        <div className="user-panel-page-template-div-wrapper">
            <UserPanelMenu name={name} />
            <UserPanelSettings email={email} />
        </div>
    );
}

export default UserSettingsPageTemplate;