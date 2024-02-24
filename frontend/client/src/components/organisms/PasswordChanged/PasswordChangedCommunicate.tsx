import React, { useEffect } from "react";
import { ROUTER_PATH } from "../../../router/RouterPath";
import { Link } from "react-router-dom";


const PasswordChangedCommunicate = () => {

    return (
        <div className="password-changed-communicate-div-wrapper">
            <span className="password-changed-span">Hasło zostało zmienione!</span>
            <Link className='login-form-link' to={ROUTER_PATH.HOME}>Powrót do strony głównej &#10148;</Link>
        </div>
    );
}

export default PasswordChangedCommunicate