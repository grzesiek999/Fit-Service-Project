import React, { useState } from "react";
import BmiCalculator from "../../../molecules/Calculators/BMI/BmiCalculator";
import BmiInformator from "../../../molecules/Calculators/BMI/BmiInformator";



const BmiCalculatorOrganism = () => {
    

    return (
        <div className="bmi-calculator-orgnism-div-wrapper">
            <h5>Oblicz swój wskaźnik BMI</h5>
            <BmiCalculator />
            <BmiInformator />
        </div>
    );
}

export default BmiCalculatorOrganism;