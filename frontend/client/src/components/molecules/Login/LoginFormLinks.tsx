import React from "react"
import { Link } from "react-router-dom";
import { ROUTER_PATH } from '../../../router/RouterPath';



const LoginFormLinks = () => {

    return (
        <div>
            <Link to={ROUTER_PATH.RESTORE_PASSWORD}>Przypomnij hasło</Link>
            <Link to={ROUTER_PATH.REGISTER}>Stwórz konto</Link>
        </div>
    );
}

export default LoginFormLinks;