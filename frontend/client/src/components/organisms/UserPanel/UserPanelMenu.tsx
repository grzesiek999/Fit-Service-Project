import React from "react";
import WelcomeUserSpan from "../../atoms/spans/WelcomeUserSpan";
import UserSettingsList from "../../atoms/lists/UserSettingsList";
import "../../../styles/index.scss";


type UserPanelMenuProps = {
    name: string;
}

const UserPanelMenu = ({name}: UserPanelMenuProps) => {
    return (
        <div className="user-panel-menu-div-wrapper">
            <WelcomeUserSpan name={name} />
            <UserSettingsList />
        </div>
    );
}

export default UserPanelMenu;