import React from "react";
import { useNavigate } from 'react-router-dom';

import "../../../styles/index.scss"

const LoginButton = () => {
    
    const navigate = useNavigate();

    return (
        <button type='button' onClick={()=>{navigate('/login');}}>zaloguj</button>
    );
}

export default LoginButton;