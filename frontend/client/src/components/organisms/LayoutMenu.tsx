import React, {JSX} from "react";
import { Link } from "react-router-dom";
import LayoutNav from "../molecules/LayoutNav";
import "../../styles/index.scss";

const LayoutMenu = ({div}: {div: JSX.Element}) => {
    return(
        <div className='layout-menu-div-wrapper'>
            <div>
                <Link to='/'>Logo</Link>
            </div>
            <LayoutNav />
            <div>
                {div} 
            </div>
        </div>
    );
}

export default LayoutMenu;