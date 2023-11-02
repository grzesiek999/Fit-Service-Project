import React from "react";
import UserPanelPageTemplate from "../components/tmpls/UserPanelPageTemplate";


const UserPanelPage = ({name}: {name:string}) => {

    return(
        <UserPanelPageTemplate name={name} />
    );
}

export default UserPanelPage;