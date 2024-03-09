import React from "react";
import "../../styles/index.scss";
import BmiCalculatorOrganism from "../organisms/Calculators/BMI/BmiCalculatorOrganism";



const BmiCalculatorPageTemplate = () =>{

    return(
        <div className="bmi-calculator-page-template-wrapper">
            <BmiCalculatorOrganism />
        </div>
    );
}

export default BmiCalculatorPageTemplate;