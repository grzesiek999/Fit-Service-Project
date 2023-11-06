import React from "react";
import "../../../styles/index.scss"


type WelcomeUserSpanProps = {
    name: string;
}

const WelcomeUserSpan = ({name}: WelcomeUserSpanProps) => {

    return(
        <span>Witaj {name}</span>
    )
}

export default WelcomeUserSpan;