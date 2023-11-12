import React from "react";
import UserSettingsPageTemplate from "../components/tmpls/UserSettingsPageTemplate";


type UserSettingsPageProps = {
    email: string;
    name: string;
}

const UserSettingsPage = ({email, name}: UserSettingsPageProps) => {

    return(
        <UserSettingsPageTemplate email={email} name={name} />
    );
}

export default UserSettingsPage;