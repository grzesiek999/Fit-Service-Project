import React from "react";
import CalculatorsHomeP1 from "../../../molecules/Calculators/Home/CalculatorsHomeP1";
import CalculatorsHomeP2 from "../../../molecules/Calculators/Home/CalculatorsHomeP2";



const CalculatorsHomeDiv = () =>{

    return (
        <div className="calculators-home-div-wrapper">
            <CalculatorsHomeP1 />
            <CalculatorsHomeP2 />
        </div>
    );
}

export default CalculatorsHomeDiv;