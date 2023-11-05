import React from "react";
import "../../../styles/index.scss";


type ButtonProps = {
    buttonType: "button" | "submit" | "reset";
    className: string;
    onClick: () => void;
    buttonTittle: string;
}

const Button = ({buttonType, className, onClick, buttonTittle}: ButtonProps) => {

    return(
        <button type={buttonType} className={className} onClick={onClick}>{buttonTittle}</button>
    );
}

export default Button;