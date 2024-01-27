import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import "../../../styles/index.scss";

const FooterContactDiv = () => {
    return(
        <div className="footer-contact-div-wrapper">
            <div className="footer-social-div-wrapper">
                <span className="footer-social-span">Znajdź mnie na</span>
                <a href="https://www.instagram.com/blvvck_rose/" target="_blank"><img src="/public/icons/instagram.png" alt="instagram icon error" className="footer-icon"/></a>
                <a href="https://www.instagram.com/blvvck_rose/" target="_blank"><img src="/public/icons/facebook.png" alt="facebook icon error" className="footer-icon"/></a>
            </div>
            <span className="footer-contact-title-span">Masz pytania ? Zadzwoń</span>
            <div className="footer-phone-div-wrapper">
                <IconContext.Provider value={{className: "phone-react-icon" }}>
                    <div className="phone-react-icon-div">
                        <FaPhoneAlt />
                    </div>
                </IconContext.Provider>;
                <span className="footer-phone-span">+48 555 555 555</span>
            </div>
            <span className="footer-call-cost-span">Opłata za minutę połączenia zgodna z cennikiem Twojego operatora.</span>
            <span className="footer-call-cost-span">Infolinia czynna w godzinach 8-19 pn-pt.</span>
        </div>
    );
}

export default FooterContactDiv