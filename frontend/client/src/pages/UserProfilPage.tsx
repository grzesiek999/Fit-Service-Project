import React from "react";
import UserProfilPageTemplate from "../components/tmpls/UserProfilPageTemplate";


type UserProfilPageProps = {
    name: string;
}

const UserProfilPage = ({name}: UserProfilPageProps) => {

    return(
        <UserProfilPageTemplate name={name} />
    );
}

export default UserProfilPage;