import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/buttons/Button";
import "../../../styles/index.scss";
import { UserAuth } from "../../../context/UserDataContext";


const AuthorizationDiv = () => {

    const {user} = useContext(UserAuth);
    const navigate = useNavigate();
    const {logOut} = useContext(UserAuth);
  
    const logout = async () => {
      const response = await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
      });
      if(response.ok){
        logOut();
        navigate('/');
      }
      else{
        console.log('Logout problem')
      }
    }

    
    if(user){
        return (
            <div className='authorization-div-wrapper'>
                <Button buttonType="button" className="my-account-button-wrapper" onClick={()=>{navigate('/user_panel');}} buttonTittle="Moje Konto" />
                <Button buttonType="button" className="logout-button-wrapper" onClick={logout} buttonTittle="Wyloguj" />
            </div>
        );
    }
    else{
        return (
            <div className='authorization-div-wrapper'>
                <Button buttonType="button" className="login-button-wrapper" onClick={()=>{navigate('/login');}} buttonTittle="Zaloguj" />
            </div>
        );
    }
}

export default AuthorizationDiv;