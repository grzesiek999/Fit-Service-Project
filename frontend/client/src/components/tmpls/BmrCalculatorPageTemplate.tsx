import React from "react";
import "../../styles/index.scss";
import BmrCalculatorOrganism from "../organisms/Calculators/BMR/BmrCalculatorOrganism";



const BmrCalculatorPageTemplate = () =>{

    return(
        <div className="bmr-calculator-page-template-wrapper">
            <BmrCalculatorOrganism />
        </div>
    );
}

export default BmrCalculatorPageTemplate;