import React from "react";
import WelcomeUserSpan from "../atoms/spans/WelcomeUserSpan";
import LogoutButton from "../atoms/buttons/LogoutButton";
import LoginButton from "../atoms/buttons/LoginButton";
import "../../styles/index.scss";


const AuthorizationDiv = ({name, logout} : {name: string, logout: ()=>void}) => {
    
    if(name === ''){
        return (
            <div className='authorization-div-wrapper'>
                <LoginButton />
            </div>
        );
    }

    else{
        return (
            <div className='authorization-div-wrapper'>
                <WelcomeUserSpan name={name} />
                <LogoutButton Click={logout} />
            </div>
        );
    }
}

export default AuthorizationDiv;