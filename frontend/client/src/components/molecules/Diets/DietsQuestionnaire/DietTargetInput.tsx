import React, { useState } from "react";
import Button from "../../../atoms/buttons/Button";


type DietTargetInputProps = {
    setTarget: (param: string) => void;
}

const DietTargetInput = ({setTarget}: DietTargetInputProps) =>{

    const [firstTarget] = useState('Chcę zdredukować wagę');
    const [secondTarget] = useState('Chcę przeprowadzić rekompozycję sylwetki');
    const [thirdTarget] = useState('Chcę zbudować masę mięśniową');
    const [firstTargetButtonClass, setFirstTargetButtonClass] = useState('target-choose-button-no-active');
    const [secondTargetButtonClass, setSecondTargetButtonClass] = useState('target-choose-button-no-active');
    const [thirdTargetButtonClass, setThirdTargetButtonClass] = useState('target-choose-button-no-active');
    const [targetButtonActiveClass] = useState('target-choose-button-active');
    const [targetButtonNoActiveClass] = useState('target-choose-button-no-active');

    return(
        <div className="target-choosing-div-wrapper">
            <span className="diet-questionnaire-span">1. Wybierz co chcesz osiągnąć:</span>
            <Button buttonType="button" className={firstTargetButtonClass} 
            onClick={()=>{ setFirstTargetButtonClass(targetButtonActiveClass); setSecondTargetButtonClass(targetButtonNoActiveClass); setThirdTargetButtonClass(targetButtonNoActiveClass); setTarget(firstTarget)}} 
            buttonTittle={firstTarget} /> 
            <Button buttonType="button" className={secondTargetButtonClass} 
            onClick={()=>{ setSecondTargetButtonClass(targetButtonActiveClass); setFirstTargetButtonClass(targetButtonNoActiveClass); setThirdTargetButtonClass(targetButtonNoActiveClass); setTarget(secondTarget)}}  
            buttonTittle={secondTarget} /> 
            <Button buttonType="button" className={thirdTargetButtonClass} 
            onClick={()=>{ setThirdTargetButtonClass(targetButtonActiveClass); setSecondTargetButtonClass(targetButtonNoActiveClass); setFirstTargetButtonClass(targetButtonNoActiveClass); setTarget(thirdTarget)}}  
            buttonTittle={thirdTarget} /> 
        </div>
    );
}

export default DietTargetInput;