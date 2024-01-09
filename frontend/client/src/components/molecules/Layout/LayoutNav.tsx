import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../../styles/index.scss";
import { ROUTER_PATH } from '../../../router/RouterPath';
import { UserAuth } from "../../../context/UserDataContext";


const LayoutNav = () =>{

    const {user} = useContext(UserAuth);


    return (
        <div className="layout-nav-div-wrapper">
            {user?.is_admin?                
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className='layout-nav-link-wrapper'>Diety</Link>
                        </li>
                        <li>
                            <Link to="/" className='layout-nav-link-wrapper'>Produkty</Link>
                        </li>
                    </ul>
                </nav>:
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className='layout-nav-link-wrapper'>Aktualności</Link>
                        </li>
                        <li>
                            <Link to="/" className='layout-nav-link-wrapper'>Informacje</Link>
                        </li>
                        <li>
                            <Link to="/" className='layout-nav-link-wrapper'>Diety</Link>
                        </li>
                        <li>
                            <Link to={ROUTER_PATH.CALCULATORS} className='layout-nav-link-wrapper'>Kalkulatory</Link>
                        </li>
                        <li>
                            <Link to="/" className='layout-nav-link-wrapper'>Kontakt</Link>
                        </li>
                    </ul>
                </nav>
            }
        </div>
    );
}

export default LayoutNav;