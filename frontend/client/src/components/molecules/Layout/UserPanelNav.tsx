import React from "react";
import { Link } from "react-router-dom";
import {ROUTER_PATH} from "../../../router/RouterPath";
import "../../../styles/index.scss";


const UserPanelNav = () => {
    
    return (    
        <div className="user-nav-div-wrapper">
            <div>Panel Użytkownika</div>
            <nav>
                <ul>
                    <li>
                        <Link to={ROUTER_PATH.USER_PROFIL} className='user-panel-link-wrapper'>Mój Profil</Link>
                    </li>
                    <li>
                        <Link to="/" className='user-panel-link-wrapper'>Moje Diety</Link>
                    </li>
                    <li>
                        <Link to="/" className='user-panel-link-wrapper'>Moje Posiłki</Link>
                    </li>
                    <li>
                        <Link to={ROUTER_PATH.USER_SETTINGS} className='user-panel-link-wrapper'>Ustawienia konta</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default UserPanelNav;