import React, { useState } from "react";
import { Link } from "react-router-dom";
import LayoutNav from "../../molecules/Layout/LayoutNav";
import "../../../styles/index.scss";
import AuthorizationDiv from "../../molecules/Layout/AuthorizationDiv";
import { ROUTER_PATH } from '../../../router/RouterPath';
import { useMedia } from 'use-media';



const WebsiteLayoutDiv = () => {

    const isWide = useMedia({ minWidth: 768 })

    return (
        <>
            {isWide?
                <div className='layout-menu-div-wrapper'>
                    <div>
                        <Link to={ROUTER_PATH.HOME}>Logo</Link>
                    </div>
                    <LayoutNav />
                    <AuthorizationDiv />
                </div>:
                <div className='mobile-layout-menu-div-wrapper'>
                    <div>
                        <Link to={ROUTER_PATH.HOME}>Logo</Link>
                    </div>
                    <LayoutNav />
                    <AuthorizationDiv />
                </div>
            }   
        </>
    );
}

export default WebsiteLayoutDiv;