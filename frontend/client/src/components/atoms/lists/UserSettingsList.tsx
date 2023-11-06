import React from "react";
import { Link } from "react-router-dom";


const UserSettingsList = () => {
    
    return (
        <div>
            <div>Panel Użytkownika</div>
            <ul>
                <li>
                    <Link to="/" className='-link-wrapper'>Moje Parametry</Link>
                </li>
                <li>
                    <Link to="/" className='-link-wrapper'>Moje Diety</Link>
                </li>
                <li>
                    <Link to="/" className='-link-wrapper'>Dziennik żywieniowy</Link>
                </li>
                <li>
                    <Link to="/user_settings" className='-link-wrapper'>Ustawienia</Link>
                </li>
            </ul>
        </div>
    );
}

export default UserSettingsList;