import React from "react";
import WelcomeUserSpan from "../../../atoms/spans/WelcomeUserSpan";
import UserPanelNav from "../../../molecules/Layout/UserPanelNav";


const UserPanelMenu = () => {

    return (
        <div className="user-panel-menu-div-wrapper">
            <WelcomeUserSpan />
            <UserPanelNav />
        </div>
    );
}

export default UserPanelMenu;