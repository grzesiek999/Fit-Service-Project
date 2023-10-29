import React from "react";
import "../../../styles/index.scss"

const WelcomeUserSpan = ({name}: {name: string}) => {

    return(
        <span>Witaj {name}</span>
    )
}

export default WelcomeUserSpan;