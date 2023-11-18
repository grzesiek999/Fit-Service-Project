import React from "react";
import { Link } from "react-router-dom";
import {ROUTER_PATH} from "../../../router/RouterPath";


const UserPanelNav = () => {
    
    return (    
        <nav>
            <ul>
                <li>
                    <Link to={ROUTER_PATH.USER_PROFIL} className='-link-wrapper'>Mój Profil</Link>
                </li>
                <li>
                    <Link to="/" className='-link-wrapper'>Moje Diety</Link>
                </li>
                <li>
                    <Link to="/" className='-link-wrapper'>Moje Posiłki</Link>
                </li>
                <li>
                    <Link to={ROUTER_PATH.USER_SETTINGS} className='-link-wrapper'>Ustawienia konta</Link>
                </li>
            </ul>
        </nav>
    );
}

export default UserPanelNav;