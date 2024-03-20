import React, { useEffect, useState } from "react";
import Button from "../buttons/Button";


type ChooseSexProps ={
    setSex: (num: number)=>void;
    inputDivClass: string;
    sexSpanClass: string;
    isSex?: number | null;
}

const ChooseSex = ({setSex, inputDivClass, sexSpanClass, isSex}: ChooseSexProps) => {

    const [b1, setB1] = useState<string>('sex-choose-button-no-active');
    const [b2, setB2] = useState<string>('sex-choose-button-no-active');

    useEffect(() => {
        if(isSex === 2) {
            setB1('sex-choose-button-active'); 
            setB2('sex-choose-button-no-active');
        }
        else if(isSex === 1) { 
            setB1('sex-choose-button-no-active'); 
            setB2('sex-choose-button-active');
        }
        else {}
    }, []);

    return(
        <div className={inputDivClass}>
            <span className={sexSpanClass}>Płeć:</span>
            <Button buttonType="button" className={b1} onClick={()=>{setSex(2); setB1('sex-choose-button-active'); setB2('sex-choose-button-no-active');}} 
            buttonTittle="Kobieta" />
            <Button buttonType="button" className={b2} onClick={()=>{setSex(1); setB1('sex-choose-button-no-active'); setB2('sex-choose-button-active');}} 
            buttonTittle="Męzczyzna" />
        </div>
    );
}

export default ChooseSex;