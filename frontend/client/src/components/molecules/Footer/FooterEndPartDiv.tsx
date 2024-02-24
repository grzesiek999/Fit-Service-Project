import React from "react";
import { LuCopyright } from "react-icons/lu";
import { Link } from "react-router-dom";


const FooterEndPartDiv = () => {

    return (
        <div className="footer-end-part-div-wrapper">
            <ul>
                <li><Link to='/' className="footer-link-wrapper">Prawa Autorskie</Link></li>
                <li><Link to='/' className="footer-link-wrapper">Regulamin</Link></li>
                <li><Link to='/' className="footer-link-wrapper">Cookie</Link></li>
                <li><Link to='/' className="footer-link-wrapper">Polityka prywatności</Link></li>
                <li><Link to='/' className="footer-link-wrapper">Odstępienie od umowy</Link></li>
                <li><Link to='/' className="footer-link-wrapper">Reklama</Link></li>
            </ul>
            <div className="copyright-div-wrapper">
                <p><LuCopyright /> 2024. Nazwa Firmy. Wszelkie prawa zastrzeżone.</p>
            </div>
        </div>
    );
}

export default FooterEndPartDiv;