import React, { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import { Link, useNavigate } from "react-router-dom";
import LayoutNav from "../../../molecules/Layouts/WebsiteLayout/LayoutNav";
import "../../../../styles/index.scss";
import AuthorizationDiv from "../../../molecules/Layouts/WebsiteLayout/AuthorizationDiv";
import { ROUTER_PATH } from '../../../../router/RouterPath';
import { useMedia } from 'use-media';
import MobileLayoutNav from "../../../molecules/Layouts/WebsiteLayout/MobileLayoutNav";
import Button from "../../../atoms/buttons/Button";



const WebsiteLayoutDiv = () => {

    const navigate = useNavigate();
    const isWide = useMedia({ minWidth: 768 });
    const [menuOpen, setMenuOpen] = useState<boolean>(false);


    const openCloseMenu = () => {
        if(menuOpen) { setMenuOpen(false); }
        else { setMenuOpen(true); } 
    }

    return (
        <>
            {isWide?
                <div className='layout-menu-div-wrapper'>
                    <div className="layout-logo-div-wrapper">
                        <Link to={ROUTER_PATH.HOME}><img src="/public/icons/logo.jpeg" alt="logo image error" className="logo-image" /></Link>
                    </div>
                    <LayoutNav />
                    <AuthorizationDiv />
                </div>:
                <div className='mobile-layout-menu-div-wrapper'>
                    <div className="mobile-menu-header-div-wrapper">
                        <div className="menu-open-icon-div-wrapper" onClick={openCloseMenu}>
                            <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
                        </div>
                        <div className="mobile-layout-menu-logo-div-wrapper">
                            <Link to={ROUTER_PATH.HOME}>Logo</Link>
                        </div>
                        <Button buttonType="button" className="login-button-wrapper" onClick={()=>{navigate(ROUTER_PATH.LOGIN);}} buttonTittle="Zaloguj" />
                    </div>
                    {menuOpen ? <MobileLayoutNav /> : null}
                </div>
            }   
        </>
    );
}

export default WebsiteLayoutDiv;