import React, { useState } from "react";
import { AddProductTextInput, AddProductNumberInput } from "../../../atoms/inputs/AddProductInput";
import Button from "../../../atoms/buttons/Button";


type EditProductDivProps = {
    isDisplayed: boolean;
    setIsDisplayed: (param: boolean) => void;
    id: number;
    name: string;
}

const EditProductDiv = ({isDisplayed, setIsDisplayed, id, name}: EditProductDivProps) => {

    const [energy, setEnergy] = useState<number | null>(null);
    const [proteins, setProteins] = useState<number | null>(null);
    const [carbohydrates, setCarbohydrates] = useState<number | null>(null);
    const [fats, setFats] = useState<number | null>(null);
    const [fiber, setFiber] = useState<number | null>(null);

    const handleEnergy = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value==='') { setEnergy(null); }
        else{
            const inputEnergy = parseFloat(e.target.value);
            setEnergy(inputEnergy);
        }
    }

    const handleProteins = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setProteins(null); }
        else {
            const inputProteins = parseFloat(e.target.value);
            setProteins(inputProteins);
        }
    }

    const handleCarbohydrates = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setCarbohydrates(null); }
        else {
            const inputCarbohydrates = parseFloat(e.target.value);
            setCarbohydrates(inputCarbohydrates);
        }
    }

    const handleFats = (e :React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') {setFats(null); }
        else {
            const inputFats = parseFloat(e.target.value);
            setFats(inputFats);
        }    
    }

    const handleFiber = (e :React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') {setFiber(null); }
        else {
            const inputFiber = parseFloat(e.target.value);
            setFiber(inputFiber);
        }    
    }

    const close = () => {
        setIsDisplayed(false);
        setEnergy(null);
        setProteins(null);
        setCarbohydrates(null);
        setFats(null);
        setFiber(null);
    }

    const submit = async () =>{
        const response = await fetch('http://localhost:8000/api/products/edit', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id,
                name,
                energy,
                proteins,
                carbohydrates,
                fats,
                fiber
            })
        })
        if(response.ok){
            setIsDisplayed(false);
            setEnergy(null);
            setProteins(null);
            setCarbohydrates(null);
            setFats(null);
            setFiber(null);
        }
        else { console.error('Error', response.status, response.statusText); }
    }

    return (
        <div className="add-product-div-wrapper" style={{ display: isDisplayed ? 'flex' : 'none' }}>
            <form onSubmit={submit}>
                <AddProductNumberInput inputType="energy" value={energy} onChange={handleEnergy} />
                <AddProductNumberInput inputType="proteins" value={proteins} onChange={handleProteins} />
                <AddProductNumberInput inputType="carbohydrates" value={carbohydrates} onChange={handleCarbohydrates} />
                <AddProductNumberInput inputType="fats" value={fats} onChange={handleFats} />
                <AddProductNumberInput inputType="fiber" value={fiber} onChange={handleFiber} />
                <div className="add-product-buttons-div-wrapper">
                    <Button buttonType="submit" className="add-product-button-wrapper" onClick={()=>{}} buttonTittle="Zapisz" />
                    <Button buttonType="button" className="close-add-product-div-button-wrapper" onClick={close} buttonTittle="Zamknij" />
                </div>
            </form>
        </div>
    );
}

export default EditProductDiv;