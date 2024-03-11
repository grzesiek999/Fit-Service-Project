import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../atoms/buttons/Button";
import { UserAuth } from "../../../../context/UserDataContext";
import { ROUTER_PATH } from '../../../../router/RouterPath';
import { FaUser } from "react-icons/fa";
import HiddenNavList from "../../../atoms/lists/HiddenNavList";


const AuthorizationDiv = () => {

  const navigate = useNavigate();
  const {user} = useContext(UserAuth);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMouseEnter = () => { setIsOpen(true); }
  const handleMouseLeave = () => { setIsOpen(false); }

  return (
    <>
      {user ?
        <div className='authorization-div-wrapper' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <FaUser className='user-icon' onClick={()=>{navigate(ROUTER_PATH.USER_PANEL); document.body.scrollIntoView({ behavior: "smooth", block: "start" });}}/>
          {isOpen && <div className="hidden-nav-div-wrapper"><HiddenNavList temp={setIsOpen} /></div>}
        </div>
        :
        <div className='authorization-div-wrapper'>
          <Button buttonType="button" className="signin-button-wrapper" onClick={()=>{navigate(ROUTER_PATH.LOGIN); document.body.scrollIntoView({ behavior: "smooth", block: "start" });}} buttonTittle="Zaloguj" />
        </div>        
      }
    </>
  );
      
}

export default AuthorizationDiv;