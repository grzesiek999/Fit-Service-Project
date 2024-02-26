import React from "react";
import "../../styles/index.scss";
import BmiCalculatorDiv from "../organisms/Calculators/BMI/BmiCalculatorDiv";


const BmiCalculatorPageTemplate = () =>{

    return(
        <div className="bmi-calculator-page-template-wrapper">
            <BmiCalculatorDiv />
        </div>
    );
}

export default BmiCalculatorPageTemplate;