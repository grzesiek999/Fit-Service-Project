import React, { useContext } from "react";
import UserPanelNav from "./UserPanelNav";
import { UserAuth } from "../../../../context/UserDataContext";


const UserPanelMenu = () => {

    const {user} = useContext(UserAuth);

    return (
        <div className="user-panel-menu-div-wrapper">
            <span className="welcome-user-span-wrapper">Cześć {user?.name}</span>
            <UserPanelNav />
        </div>
    );
}

export default UserPanelMenu;