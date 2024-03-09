import React, { useState } from "react";
import Button from "../../../atoms/buttons/Button";
import AddParameterInput from "../../../atoms/inputs/AddParametersInput";
import SignInLabel from "../../../atoms/labels/SignInLabel";


const BmiCalculator = () => {

    const [weight, setWeight] = useState<number | null>(null);
    const [height, setHeight] = useState<number | null>(null);
    const [bmi, setBMI] = useState<number | null>(null);

    const handleWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(parseFloat(e.target.value));
    }

    const handleHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(parseFloat(e.target.value));
    }

    const calculateBMI = () => {
        if(weight && height) {
            const bmiValue = weight / ((height/100)*(height/100));
            setBMI(bmiValue);
        }
    }

    return (
        <div className="bmi-calculator-with-scale-div-wrapper">
            <div className="bmi-calculator">
                <span className="bmi-calculator-title-span">Kalkulator BMI</span>
                <div className="bmi-calculator-get-data-div">
                    <SignInLabel context="Waga:"/>
                    <AddParameterInput inputType="float" value={weight} className="bmi-calculator-input" onChange={handleWeight} /> kg
                </div>
                <div className="bmi-calculator-get-data-div">
                    <SignInLabel context="Wzrost:"/>
                    <AddParameterInput inputType="int" value={height} className="bmi-calculator-input" onChange={handleHeight} /> cm
                </div>
                <Button buttonType="button" className="bmi-calculate-button" onClick={calculateBMI} buttonTittle="Oblicz" />
                <div className="bmi-calculator-result-div">
                    <SignInLabel context="Wynik:"/>
                    <div className="bmi-result">{bmi ? bmi.toFixed(2):0}</div>
                </div>
            </div>
            <div className="bmi-scale-div-wrapper">
                <img src="../../public/images/bmi-tabela.webp" alt="bmi tabela image error" className="bmi-scale-image" />
            </div>
        </div>
    );
}

export default BmiCalculator;