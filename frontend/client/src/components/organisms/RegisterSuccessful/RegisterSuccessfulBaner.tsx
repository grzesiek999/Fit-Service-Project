import React from "react";
import Button from "../../atoms/buttons/Button";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../router/RouterPath";


const RegisterSuccessfulBaner = () => {

    const navigate = useNavigate();

    return (
        <div className="register-successful-banner-div-wrapper">
            <span>Gratulacje !</span>
            <span>Pomyślnie utworzono konto.</span>
            <p>Na twój adres email został wysłany link aktywacyjny konta. Nalezy aktywować konto w celu zweryfikowania adresu email.</p>
            <Button buttonType="button" className="signin-button-wrapper" onClick={()=>{navigate(ROUTER_PATH.LOGIN)}} buttonTittle="Zaloguj" />
        </div>
    );
}

export default RegisterSuccessfulBaner;