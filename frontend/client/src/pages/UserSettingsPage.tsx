import React from "react";
import UserSettingsPageTemplate from "../components/tmpls/UserSettingsPageTemplate";


type UserSettingsPageProps = {
    email: string;
}

const UserSettingsPage = ({email}: UserSettingsPageProps) => {

    return(
        <UserSettingsPageTemplate email={email}/>
    );
}

export default UserSettingsPage;