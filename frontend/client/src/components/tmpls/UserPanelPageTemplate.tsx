import React from "react";
import { Link } from "react-router-dom";
import WelcomeUserSpan from "../atoms/spans/WelcomeUserSpan";


type UserPanelPageTemplateProps = {
    name: string;
}

const UserPanelPageTemplate = ({name}: UserPanelPageTemplateProps) => {

    return (
        <div>
            <WelcomeUserSpan name={name} />
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