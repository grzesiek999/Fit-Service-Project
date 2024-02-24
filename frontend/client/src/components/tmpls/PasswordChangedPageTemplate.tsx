import React from "react";
import "../../styles/index.scss";
import PasswordChangedCommunicate from "../organisms/PasswordChanged/PasswordChangedCommunicate";


const PasswordChangedPageTemplate = () => {

    return(
        <div className="password-changed-page-template-div-wrapper">
            <PasswordChangedCommunicate />
        </div>
    );
}

export default PasswordChangedPageTemplate;