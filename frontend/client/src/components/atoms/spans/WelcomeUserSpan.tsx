import React, { useContext } from "react";
import "../../../styles/index.scss"
import { UserAuth } from "../../../context/UserDataContext";




const WelcomeUserSpan = () => {

    const {user} = useContext(UserAuth);


    return(
        <span className="welcome-user-span-wrapper">Witaj {user?.name}</span>
    )
}

export default WelcomeUserSpan;