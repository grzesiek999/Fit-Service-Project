import React from "react";
import UserPanelMenu from "../organisms/UserPanel/UserPanelMenu";


type UserProfilPageTemplateProps = {
    name: string;
}

const UserProfilPageTemplate = ({name}: UserProfilPageTemplateProps) => {
    return (
    <div className="user-panel-page-template-div-wrapper">
        <UserPanelMenu name={name} />
        
    </div>
    );
}

export default UserProfilPageTemplate;