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
    const {logOut} = useContext(UserAuth);

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
        }
        else{
          console.log('Logout problem')
        }
      }

    return (
        <ul>
            <li><Link to={ROUTER_PATH.USER_PROFIL}>Mój Profil</Link></li>
            <li><Link to="/">Moje Diety</Link></li>
            <li><Link to="/">Moje Posiłki</Link></li>
            <li><Link to={ROUTER_PATH.USER_SETTINGS}>Ustawienia konta</Link></li>
            <li onClick={logout}>Wyloguj</li>
        </ul>
    );
}

export default HiddenNavList;