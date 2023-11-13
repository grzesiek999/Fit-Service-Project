import React from "react";
import { Link } from "react-router-dom";


const UserSettingsList = () => {
    
    return (
        <div className="user-setting-nav-div-wrapper">
            <div>Panel Użytkownika</div>
            <ul>
                <li>
                    <Link to="/user_profil" className='-link-wrapper'>Mój Profil</Link>
                </li>
                <li>
                    <Link to="/" className='-link-wrapper'>Moje Diety</Link>
                </li>
                <li>
                    <Link to="/" className='-link-wrapper'>Moje Posiłki</Link>
                </li>
                <li>
                    <Link to="/user_settings" className='-link-wrapper'>Ustawienia konta</Link>
                </li>
            </ul>
        </div>
    );
}

export default UserSettingsList;