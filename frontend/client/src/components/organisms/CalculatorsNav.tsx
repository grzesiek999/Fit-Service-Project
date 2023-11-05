import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";


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
                        <Link to="/calculators/check_product" className='calculators-nav-link-wrapper'>Sprawdź produkt</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default CalculatorsNav;