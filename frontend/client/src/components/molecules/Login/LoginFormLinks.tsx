import React from "react"
import { Link } from "react-router-dom";


const LoginFormLinks = () => {

    return (
        <div>
            <Link to="/restore_password">Przypomnij hasło</Link>
            <Link to="/register">Stwórz konto</Link>
        </div>
    );
}

export default LoginFormLinks;