import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/buttons/Button";
import "../../../styles/index.scss";
import { UserAuth } from "../../../context/UserDataContext";
import { ROUTER_PATH } from '../../../router/RouterPath';


const AuthorizationDiv = () => {

    const {user, logOut} = useContext(UserAuth);
    const navigate = useNavigate();
  
    const logout = async () => {
      const response = await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
      });
      if(response.ok){
        logOut();
        localStorage.removeItem('user');
        navigate(ROUTER_PATH.HOME);
      }
      else{
        console.log('Logout problem')
      }
    }

    if(user){
        return (
            <div className='authorization-div-wrapper'>
                <Button buttonType="button" className="my-account-button-wrapper" onClick={()=>{navigate(ROUTER_PATH.USER_PANEL);}} buttonTittle="Moje Konto" />
                <Button buttonType="button" className="logout-button-wrapper" onClick={logout} buttonTittle="Wyloguj" />
            </div>
        );
    }
    else{
        return (
            <div className='authorization-div-wrapper'>
                <Button buttonType="button" className="login-button-wrapper" onClick={()=>{navigate(ROUTER_PATH.LOGIN);}} buttonTittle="Zaloguj" />
            </div>
        );
    }
}

export default AuthorizationDiv;