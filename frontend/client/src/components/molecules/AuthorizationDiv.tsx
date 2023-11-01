import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/buttons/Button";
import "../../styles/index.scss";


const AuthorizationDiv = ({name, logout} : {name: string, logout: ()=>void}) => {

    const navigate = useNavigate();
    
    if(name === ''){
        return (
            <div className='authorization-div-wrapper'>
                <Button buttonType="button" className="login-button-wrapper" onClick={()=>{navigate('/login');}} buttonTittle="Zaloguj" />
            </div>
        );
    }

    else{
        return (
            <div className='authorization-div-wrapper'>
                <Button buttonType="button" className="my-account-button-wrapper" onClick={()=>{navigate('/user_panel');}} buttonTittle="Moje Konto" />
                <Button buttonType="button" className="logout-button-wrapper" onClick={logout} buttonTittle="Wyloguj" />
            </div>
        );
    }
}

export default AuthorizationDiv;