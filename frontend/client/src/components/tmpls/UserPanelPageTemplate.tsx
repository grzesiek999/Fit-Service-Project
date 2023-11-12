import React from "react";
import UserPanelMenu from "../organisms/UserPanel/UserPanelMenu";
import UserPanelContent from "../organisms/UserPanel/UserPanelContent";
import "../../styles/index.scss";


type UserPanelPageTemplateProps = {
    name: string;
}

const UserPanelPageTemplate = ({name}: UserPanelPageTemplateProps) => {

    return (
        <div className="user-panel-page-template-div-wrapper">
            <UserPanelMenu name={name} />
            <UserPanelContent />
        </div>
    );
}

export default UserPanelPageTemplate;