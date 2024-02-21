import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../atoms/buttons/Button";
import { UserAuth } from "../../../../context/UserDataContext";
import { ROUTER_PATH } from '../../../../router/RouterPath';
import { SESSION } from "../../../../constant/Session";


const AuthorizationDiv = () => {

    const navigate = useNavigate();
    const {user, logOut} = useContext(UserAuth);

    const logout = async () => {
      const response = await fetch('http://localhost:8000/api/logout', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
      });
      if(response.ok){
        logOut();
        localStorage.removeItem(SESSION.USER);
        navigate(ROUTER_PATH.HOME);
      }
      else{
        console.log('Logout problem')
      }
    }

    return (
      <div>
        {user ?
          <div className='authorization-div-wrapper'>
            <Button buttonType="button" className="my-account-button-wrapper" onClick={()=>{navigate(ROUTER_PATH.USER_PANEL);}} buttonTittle="Moje Konto" />
            <Button buttonType="button" className="logout-button-wrapper" onClick={logout} buttonTittle="Wyloguj" />
          </div> 
          :
          <div className='authorization-div-wrapper'>
            <Button buttonType="button" className="signin-button-wrapper" onClick={()=>{navigate(ROUTER_PATH.LOGIN);}} buttonTittle="Zaloguj" />
          </div>        
        }
      </div>
    );
      
}

export default AuthorizationDiv;