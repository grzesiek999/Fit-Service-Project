import React from "react"
import { Link } from "react-router-dom";
import { ROUTER_PATH } from '../../../router/RouterPath';



const LoginFormLinks = () => {

    return (
        <div className="login-form-links-div-wrapper">
            <div>
                <label>Nie pamiętasz hasła?</label>
                <Link className='login-form-link' to={ROUTER_PATH.RESTORE_PASSWORD} onClick={()=>{document.body.scrollIntoView({ behavior: "smooth", block: "start" });}}>Przypomnij hasło &#10148;</Link>
            </div>
            <div>
                <label>Nie masz konta?</label>
                <Link className='login-form-link' to={ROUTER_PATH.REGISTER} onClick={()=>{document.body.scrollIntoView({ behavior: "smooth", block: "start" });}}>Stwórz konto &#10148;</Link>
            </div>
        </div>
    );
}

export default LoginFormLinks;