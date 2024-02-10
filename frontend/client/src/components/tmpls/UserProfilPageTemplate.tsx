import React from "react";
import UserProfilContent from "../organisms/UserPanel/MyProfil/UserProfilContent";
import "../../styles/index.scss";


const UserProfilPageTemplate = () => {
    return (
        <div className="user-profil-page-template-div-wrapper">
            <UserProfilContent />
        </div>
    );
}

export default UserProfilPageTemplate;