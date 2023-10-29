import React from "react";
import '../../../styles/index.scss';


const LogoutButton = ({Click}: {Click: () => void}) => {
    
    return(
        <button type='button' className='logout-button' onClick={Click}>Wyloguj</button>
    );
}

export default LogoutButton;