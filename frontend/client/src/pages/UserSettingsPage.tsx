import React from "react";
import UserSettingsPageTemplate from "../components/tmpls/UserSettingsPageTemplate";


const UserSettingsPage = ({email}: {email: string}) => {

    return(
        <UserSettingsPageTemplate email={email}/>
    );
}

export default UserSettingsPage;