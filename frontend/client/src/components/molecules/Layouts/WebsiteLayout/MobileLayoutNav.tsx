import React from "react";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "../../../../router/RouterPath";


const MobileLayoutNav = () => {

    return (
        <div className="mobile-nav-div-wrapper">
            <nav>
                <ul>
                    <li>
                        <Link to="/" className='layout-nav-link-wrapper'>Aktualności</Link>
                    </li>
                    <li>
                        <Link to="/" className='layout-nav-link-wrapper'>Informacje</Link>
                    </li>
                    <li>
                        <Link to="/" className='layout-nav-link-wrapper'>Diety</Link>
                    </li>
                    <li>
                        <Link to={ROUTER_PATH.CALCULATORS} className='layout-nav-link-wrapper'>Kalkulatory</Link>
                    </li>
                    <li>
                        <Link to="/" className='layout-nav-link-wrapper'>Kontakt</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MobileLayoutNav;