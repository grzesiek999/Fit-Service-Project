import React from "react";
import { ROUTER_PATH } from "../../../../router/RouterPath";
import Button from "../../../atoms/buttons/Button";
import { useNavigate } from "react-router-dom";



const NoDietInformation = () => {

    const navigate = useNavigate();

    return (
        <div className="no-diet-information-div-wrapper">
            <p>Niestety nie posiadasz zadnego wykupionego planu dietetycznego,</p>
            <p>jeśli chcesz wykupić spersonalizowany plan dietetyczny uzyj linku ponizej:</p>
            <Button buttonType="button" className="buy-diet-link-button" onClick={()=>{navigate(ROUTER_PATH.DIETS); 
                document.body.scrollIntoView({ behavior: "smooth", block: "start" });}} buttonTittle="Wykup plan dietetyczny &#10148;" />
        </div>
    );
}

export default NoDietInformation;