import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../router/RouterPath";
import { SESSION } from "../../../constant/Session";
import { UserAuth } from "../../../context/UserDataContext";

type HiddenNavListProps = {
    temp: (flag: boolean) => void;
}


const HiddenNavList = ({temp}: HiddenNavListProps) => {

    const navigate = useNavigate();
    const {logOut, user} = useContext(UserAuth);

    const logout = async () => {
        const response = await fetch('http://localhost:8000/api/logout', {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
        });
        if(response.ok){
          logOut();
          localStorage.removeItem(SESSION.USER);
          temp(false);
          navigate(ROUTER_PATH.HOME);
          document.body.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        else{
          console.log('Logout problem')
        }
    }

  return (
    <>
      {user?.is_admin ?
        <ul>
          <li><Link to={ROUTER_PATH.USER_SETTINGS} onClick={()=>{document.body.scrollIntoView({ behavior: "smooth", block: "start" });}}>Ustawienia konta</Link></li>
          <li onClick={logout}>Wyloguj</li>
        </ul>:
        <ul>
          <li><Link to={ROUTER_PATH.USER_PROFIL} onClick={()=>{document.body.scrollIntoView({ behavior: "smooth", block: "start" });}}>Mój Profil</Link></li>
          <li><Link to={ROUTER_PATH.MY_DIETS} onClick={()=>{document.body.scrollIntoView({ behavior: "smooth", block: "start" });}}>Plan Dietetyczny</Link></li>
          <li><Link to={ROUTER_PATH.MY_MEALS} onClick={()=>{document.body.scrollIntoView({ behavior: "smooth", block: "start" });}}>Moje Posiłki</Link></li>
          <li><Link to={ROUTER_PATH.USER_SETTINGS} onClick={()=>{document.body.scrollIntoView({ behavior: "smooth", block: "start" });}}>Ustawienia konta</Link></li>
          <li onClick={logout}>Wyloguj</li>
        </ul>
      }
    </>
  );
}

export default HiddenNavList;