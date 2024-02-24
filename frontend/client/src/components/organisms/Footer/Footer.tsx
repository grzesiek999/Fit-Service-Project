import React from "react";
import FooterMessageDiv from "../../molecules/Footer/FooterMessageDiv";
import FooterContactDiv from "../../molecules/Footer/FooterContactDiv";
import "../../../styles/index.scss";
import FooterEndPartDiv from "../../molecules/Footer/FooterEndPartDiv";


const Footer = () => {

    return(
        <div className="footer-div-wrapper">
            <div className="footer-main-div-part-wrapper">
                <FooterMessageDiv />
                <FooterContactDiv />
            </div>
            <FooterEndPartDiv />
        </div>
    );

}

export default Footer