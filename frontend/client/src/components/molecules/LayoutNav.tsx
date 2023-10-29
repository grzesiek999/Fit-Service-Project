import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

const LayoutNav = () =>{

    return (
        <div className="layout-nav-div-wrapper">
            <nav>
                <ul>
                    <li>
                    <Link to="/" className='nav-link-wrapper'>Artykuły</Link>
                    </li>
                    <li>
                    <Link to="/" className='nav-link-wrapper'>Informacje</Link>
                    </li>
                    <li>
                    <Link to="/" className='nav-link-wrapper'>Diety</Link>
                    </li>
                    <li>
                    <Link to="/" className='nav-link-wrapper'>Dziennik</Link>
                    </li>
                    <li>
                    <Link to="/" className='nav-link-wrapper'>Kontakt</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default LayoutNav;