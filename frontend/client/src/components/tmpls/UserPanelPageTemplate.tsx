import React from "react";
import { Link } from "react-router-dom";


const UserPanelPageTemplate = ({name}: {name: string}) => {


    return (
        <div>
            <h1>Witaj {name}</h1>
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
        </div>
    );
}

export default UserPanelPageTemplate;