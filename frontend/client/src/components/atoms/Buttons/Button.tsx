import React from "react";
import "../../../styles/index.scss";


const Button = ({buttonType, className, onClick, buttonTittle}: {buttonType: "button" | "submit" | "reset", className: string, onClick: ()=>void, buttonTittle: string}) => {

    return(
        <button type={buttonType} className={className} onClick={onClick}>{buttonTittle}</button>
    );
}

export default Button;