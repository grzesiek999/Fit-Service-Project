import React from "react";
import FooterMessageDiv from "../../molecules/Footer/FooterMessageDiv";
import FooterContactDiv from "../../molecules/Footer/FooterContactDiv";
import "../../../styles/index.scss";


const Footer = () => {

    return(
        <div className="footer-div-wrapper">
            <FooterMessageDiv />
            <FooterContactDiv />
        </div>
    );

}

export default Footer