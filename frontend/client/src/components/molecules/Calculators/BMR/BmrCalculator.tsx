import React, { useState } from "react";
import Button from "../../../atoms/buttons/Button";
import AddParameterInput from "../../../atoms/inputs/AddParametersInput";
import ChooseSex from "../../../atoms/inputs/ChooseSex";


type BmiCalculatorProps = {
    setBmr: (param: number | null) => void;
    setDemand: (param: number | null) => void;
}

const BmiCalculator = ( {setBmr, setDemand} : BmiCalculatorProps ) => {

    const [sex, setSex] = useState<number>(0);
    const [weight, setWeight] = useState<number | null>(null);
    const [height, setHeight] = useState<number | null>(null);
    const [age, setAge] = useState<number | null>(null);
    const [physic_activity, setPhysic_activity] = useState<number>(0);
    const [messageSex, setMessageSex] = useState<null|String>(null);
    const [messagePhysicActivity, setMessagePhysicActivity] = useState<null|String>(null);
    const [messageWeight, setMessageWeight] = useState<null|String>(null);
    const [messageHeight, setMessageHeight] = useState<null|String>(null);
    const [messageAge, setMessageAge] = useState<null|String>(null);

    const handlePhysicActivity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhysic_activity(parseInt(e.target.value));
    };

    const handleWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(parseFloat(e.target.value));
    }

    const handleHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(parseFloat(e.target.value));
    }

    const handleAge = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setAge(parseInt(e.target.value));
    }

    const calculateBMR = () => {
        if(sex === 0 || weight === null || height === null || age === null || physic_activity === 0){
            if (sex === 0){setMessageSex('Nie wybrano płci!');}
            if (height){setMessageHeight('Musisz podać swój wzost!');}
            if (weight){setMessageWeight('Musisz podać swoją wage!');}
            if (age){setMessageAge('Musisz podać swój wiek !');}
            if (sex === 0){setMessagePhysicActivity('Wybierz poziom aktywności fizycznej!');}
        }
        else {
            let multipler;
            if (physic_activity === 1) {multipler = 1.2;} 
            else if (physic_activity === 2) {multipler = 1.4;} 
            else if (physic_activity === 3) {multipler = 1.6;} 
            else if (physic_activity === 4) {multipler = 1.8;} 
            else if (physic_activity === 5) {multipler = 2;}
            else {return null;} 
            if(sex === 1) {
                const bmr = (9.99 * weight) + (6.25 * height) - (4.92 * age) + 5;
                const demand = bmr * multipler;
                setBmr(bmr);
                setDemand(demand);
                window.scrollTo({ top: 300, behavior: 'smooth' });
            }
            else if(sex === 2) {
                const bmr = (9.99 * weight) + (6.25 * height) - (4.92 * age) - 161;
                const demand = bmr * multipler;
                setBmr(bmr);
                setDemand(demand);
                window.scrollTo({ top: 300, behavior: 'smooth' });
            }
            else {return null;}
        }
    }

    return(
        <div className="bmr-calculator-div-wrapper">
            <ChooseSex setSex={setSex} inputDivClass="bmr-input-div-wrapper" sexSpanClass="span-input-title" />
            { messageSex ? <span>{messageSex}</span> : null}
            <div className="bmr-input-div-wrapper">
                <span className="span-input-title">Waga:</span>
                <AddParameterInput inputType="float" value={weight} className="bmr-calculator-input" onChange={handleWeight} /> kg
            </div>
            { messageWeight ? <span>{messageWeight}</span> : null}
            <div className="bmr-input-div-wrapper">
                <span className="span-input-title">Wzorst:</span>
                <AddParameterInput inputType="float" value={height} className="bmr-calculator-input" onChange={handleHeight} /> kg
            </div>
            { messageHeight ? <span>{messageHeight}</span> : null}
            <div className="bmr-input-div-wrapper">
                <span className="span-input-title">Wiek:</span>
                <AddParameterInput inputType="int" value={age} className="bmr-calculator-input" onChange={handleAge} /> kg
            </div>
            { messageAge ? <span>{messageAge}</span> : null}
            <div className="bmr-physic-active-input-div-wrapper">
                <span className="span-input-title">Aktywność fizyczna:</span>
                <AddParameterInput inputType="physic_activity" value={physic_activity} className="" onChange={handlePhysicActivity}/>
            </div>
            { messagePhysicActivity ? <span>{messagePhysicActivity}</span> : null}
            <Button buttonType="button" className="bmr-calculate-button" onClick={calculateBMR} buttonTittle="Oblicz" />
        </div>
    )
}

export default BmiCalculator;