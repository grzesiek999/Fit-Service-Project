import React from "react";
import { Link } from "react-router-dom";
import LayoutNav from "../../molecules/Layout/LayoutNav";
import "../../../styles/index.scss";
import AuthorizationDiv from "../../molecules/Layout/AuthorizationDiv";



const LayoutMenu = () => {
    return(
        <div className='layout-menu-div-wrapper'>
            <div>
                <Link to='/'>Logo</Link>
            </div>
            <LayoutNav />
            <AuthorizationDiv />
        </div>
    );
}

export default LayoutMenu;