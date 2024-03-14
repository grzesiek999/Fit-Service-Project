import React, { SyntheticEvent, useEffect, useState } from "react";
import Button from "../../../atoms/buttons/Button";
import AddParameterInput from "../../../atoms/inputs/AddParametersInput";


type EditParametersProps = {
    isSex?: number | null;
    parameters_id?: number;
}

const EditParametersForm = ({parameters_id, isSex = null}: EditParametersProps) => {

    const [message, setMessage] = useState<string>('');
    const [b1, setB1] = useState<string>('sex-choose-button-no-active');
    const [b2, setB2] = useState<string>('sex-choose-button-no-active');
    const [sex, setSex] = useState<number>(isSex===null ? 0 : isSex);
    const [height, setHeight] = useState<number | null>(null);
    const [weight, setWeight] = useState<number | null>(null);
    const [physic_activity, setPhysic_activity] = useState<number>(0);
    const [chest, setChest] = useState<number | null>(null);
    const [belly, setBelly] = useState<number | null>(null);
    const [biceps, setBiceps] = useState<number | null>(null);
    const [arms, setArms] = useState<number | null>(null);
    const [thighs, setThighs] = useState<number | null>(null);
    const [calves, setCalves] = useState<number | null>(null);

    const handleHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setHeight(null); }
        else {
            const inputHeight = parseFloat(e.target.value);
            setHeight(inputHeight);
        }
    }

    const handleWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setWeight(null); }
        else {
            const inputWeight = parseFloat(e.target.value);
            setWeight(inputWeight);
        }
    }

    const handlePhysicActivity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhysic_activity(parseInt(e.target.value));
    };

    const handleChest = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setChest(null); }
        else {
            const inputChest = parseFloat(e.target.value);
            setChest(inputChest);
        }
    }

    const handleBelly = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setBelly(null); }
        else {
            const inputBelly = parseFloat(e.target.value);
            setBelly(inputBelly);
        }
    }

    const handleBiceps = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setBiceps(null); }
        else {
            const inputBiceps = parseFloat(e.target.value);
            setBiceps(inputBiceps);
        }
    }

    const handleArms = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setArms(null); }
        else {
            const inputArms = parseFloat(e.target.value);
            setArms(inputArms);
        }
    }

    const handleThighs = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setThighs(null); }
        else {
            const inputThighs = parseFloat(e.target.value);
            setThighs(inputThighs);
        }
    }

    const handleCalves = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setCalves(null); }
        else {
            const inputCalves = parseFloat(e.target.value);
            setCalves(inputCalves);
        }
    }

    const changeParameters = async (e:SyntheticEvent) =>{
        e.preventDefault();
        
        const response = await fetch('http://localhost:8000/api/parameters/edit', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                parameters_id,
                sex,
                height, 
                weight,  
                physic_activity, 
                chest, 
                belly, 
                biceps, 
                arms, 
                thighs, 
                calves
            })
        });
        if(response.ok) { window.location.reload(); }
        else { setMessage(response.statusText); }
    }

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
        <div className="edit-parameters-div-form-wrapper">
            <form onSubmit={changeParameters}>
            <h5>Edytuj swoje parametry</h5>
                <div className="add-parameters-inputs-div-wrapper">
                    <div className="add-parameters-inputs-part1-div-wrapper"> 
                        <div className="parameters-input-div-wrapper">
                            <span className="parameters-sex-span-input-title">Wybierz swoją płeć:</span>
                            <Button buttonType="button" className={b1} onClick={()=>{setSex(2); setB1('sex-choose-button-active'); setB2('sex-choose-button-no-active');}} 
                            buttonTittle="Kobieta" />
                            <Button buttonType="button" className={b2} onClick={()=>{setSex(1); setB1('sex-choose-button-no-active'); setB2('sex-choose-button-active');}} 
                            buttonTittle="Męzczyzna" />
                        </div>
                        <div className="parameters-input-div-wrapper">
                            <span className="parameters-span-input-title">Wzorst:</span>
                            <AddParameterInput inputType="float" value={height} className="parameters-calculator-input" onChange={handleHeight} /> cm
                        </div>
                        <div className="parameters-input-div-wrapper">
                            <span className="parameters-span-input-title">Waga:</span>
                            <AddParameterInput inputType="float" value={weight} className="parameters-calculator-input" onChange={handleWeight} /> kg
                        </div>
                        <div className="parameters-physic-active-input-div-wrapper">
                            <span className="parameters-span-input-title">Aktywność fizyczna:</span>
                            <AddParameterInput inputType="physic_activity" value={physic_activity} className="" onChange={handlePhysicActivity}/>
                        </div>
                    </div>
                    <div className="add-parameters-inputs-part2-div-wrapper">
                        <div className="parameters-input-div-wrapper">
                            <span className="parameters-span-input-title">Biceps:</span>
                            <AddParameterInput inputType="float" value={biceps} className="parameters-calculator-input" onChange={handleBiceps} /> cm
                        </div>
                        <div className="parameters-input-div-wrapper">
                            <span className="parameters-span-input-title">Klata:</span>
                            <AddParameterInput inputType="float" value={chest} className="parameters-calculator-input" onChange={handleChest} /> cm
                        </div>
                        <div className="parameters-input-div-wrapper">
                            <span className="parameters-span-input-title">Przedramie:</span>
                            <AddParameterInput inputType="float" value={arms} className="parameters-calculator-input" onChange={handleArms} /> cm
                        </div>
                        <div className="parameters-input-div-wrapper">
                            <span className="parameters-span-input-title">Brzuch:</span>
                            <AddParameterInput inputType="float" value={belly} className="parameters-calculator-input" onChange={handleBelly} /> cm
                        </div>
                        <div className="parameters-input-div-wrapper">
                            <span className="parameters-span-input-title">Udo:</span>
                            <AddParameterInput inputType="float" value={thighs} className="parameters-calculator-input" onChange={handleThighs} /> cm
                        </div>
                        <div className="parameters-input-div-wrapper">
                            <span className="parameters-span-input-title">Łydka:</span>
                            <AddParameterInput inputType="float" value={calves} className="parameters-calculator-input" onChange={handleCalves} /> cm
                        </div>
                    </div>
                </div>
                <Button buttonType="submit" className="change-parameters-button-wrapper" onClick={()=>{}} buttonTittle="Zmień"/>
            </form>
            {message && <div>{message}</div>}
        </div>
    );
}

export default EditParametersForm;