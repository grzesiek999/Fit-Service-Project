import React from "react";
import UserPanelPageTemplate from "../components/tmpls/UserPanelPageTemplate";


type UserPanelPageProps = {
    name: string;
}

const UserPanelPage = ({name}: UserPanelPageProps) => {

    return(
        <UserPanelPageTemplate name={name} />
    );
}

export default UserPanelPage;