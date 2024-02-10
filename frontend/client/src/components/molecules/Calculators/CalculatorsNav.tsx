import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/index.scss";
import { ROUTER_PATH } from '../../../router/RouterPath';



const CalculatorsNav = () => {
    return (
        <div className="calculators-nav-div-wrapper">
            <nav>
                <ul>
                    <li>
                        <Link to="/bmi" className='calculators-nav-link-wrapper'>BMI</Link>
                    </li>
                    <li>
                        <Link to="/bmr" className='calculators-nav-link-wrapper'>BMR</Link>
                    </li>
                    <li>
                        <Link to={ROUTER_PATH.CHECK_PRODUCT} className='calculators-nav-link-wrapper'>Sprawdź produkt</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default CalculatorsNav;