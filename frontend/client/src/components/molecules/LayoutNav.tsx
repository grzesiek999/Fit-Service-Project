import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

const LayoutNav = () =>{

    return (
        <div className="layout-nav-div-wrapper">
            <nav>
                <ul>
                    <li>
                    <Link to="/" className='layout-nav-link-wrapper'>Aktualności</Link>
                    </li>
                    <li>
                    <Link to="/" className='layout-nav-link-wrapper'>ddd</Link>
                    </li>
                    <li>
                    <Link to="/" className='layout-nav-link-wrapper'>Oferta</Link>
                    </li>
                    <li>
                    <Link to="/calculators" className='layout-nav-link-wrapper'>Kalkulatory</Link>
                    </li>
                    <li>
                    <Link to="/" className='layout-nav-link-wrapper'>Kontakt</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default LayoutNav;