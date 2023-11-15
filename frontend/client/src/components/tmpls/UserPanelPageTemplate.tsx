import React from "react";
import UserPanelMenu from "../organisms/UserPanel/UserPanelMenu";
import UserPanelContent from "../organisms/UserPanel/UserPanelContent";
import "../../styles/index.scss";


const UserPanelPageTemplate = () => {

    return (
        <div className="user-panel-page-template-div-wrapper">
            <UserPanelMenu />
            <UserPanelContent />
        </div>
    );
}

export default UserPanelPageTemplate;