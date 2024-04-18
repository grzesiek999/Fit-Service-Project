import React, { useContext } from "react";
import UserPanelNav from "./UserPanelNav";
import { UserAuth } from "../../../../context/UserDataContext";
import upperFirstLetter from "../../../../utils/UpperFirstLetter";


const UserPanelMenu = () => {

    const {user} = useContext(UserAuth);

    return (
        <div className="user-panel-menu-div-wrapper">
            <span className="welcome-user-span-wrapper">Cześć {upperFirstLetter(user?.name)}</span>
            <UserPanelNav />
        </div>
    );
}

export default UserPanelMenu;