import React from "react";
import { Link } from "react-router-dom";
import {ROUTER_PATH} from "../../../../router/RouterPath";


const UserPanelNav = () => {
    
    return (    
        <div className="user-nav-div-wrapper">
            <div className="user-panel-header-nav-div-wrapper">
                <Link to={ROUTER_PATH.USER_PANEL}  className="user-panel-header-link-wrapper" onClick={()=>{document.body.scrollIntoView({ behavior: "smooth", block: "start" });}}>Panel Użytkownika</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={ROUTER_PATH.USER_PROFIL} className='user-panel-link-wrapper' onClick={()=>{document.body.scrollIntoView({ behavior: "smooth", block: "start" });}}>Mój Profil</Link>
                    </li>
                    <li>
                        <Link to={ROUTER_PATH.MY_DIETS} className='user-panel-link-wrapper' onClick={()=>{document.body.scrollIntoView({ behavior: "smooth", block: "start" });}}>Plan Dietetyczny</Link>
                    </li>
                    <li>
                        <Link to={ROUTER_PATH.MY_MEALS} className='user-panel-link-wrapper' onClick={()=>{document.body.scrollIntoView({ behavior: "smooth", block: "start" });}}>Moje Posiłki</Link>
                    </li>
                    <li>
                        <Link to={ROUTER_PATH.USER_SETTINGS} className='user-panel-link-wrapper' onClick={()=>{document.body.scrollIntoView({ behavior: "smooth", block: "start" });}}>Ustawienia konta</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default UserPanelNav;