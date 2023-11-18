import React, { useState, SyntheticEvent} from "react";
import "../../../styles/index.scss";
import { AddProductTextInput, AddProductNumberInput } from "../../atoms/inputs/AddProductInput";
import Button from "../../atoms/buttons/Button";


type AddProductDivProps = {
    isDisplayed: boolean;
    setIsDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddProductDiv = ({isDisplayed, setIsDisplayed}: AddProductDivProps) => {

    const [message, setMessage] = useState('');
    const [name, setName] = useState<string>('');
    const [energy, setEnergy] = useState<number | null>(null);
    const [proteins, setProteins] = useState<number | null>(null);
    const [carbohydrates, setCarbohydrates] = useState<number | null>(null);
    const [fats, setFats] = useState<number | null>(null);

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

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

    const close = () => {
        setIsDisplayed(false);
        setName('');
        setEnergy(null);
        setProteins(null);
        setCarbohydrates(null);
        setFats(null);
    }

    const submit = async (e: SyntheticEvent) =>{
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/products/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                energy,
                proteins,
                carbohydrates,
                fats
            })
        })
        if(response.ok){
            setIsDisplayed(false);
            setName('');
            setEnergy(null);
            setProteins(null);
            setCarbohydrates(null);
            setFats(null);
        }
        else{
            console.error('Error', response.status, response.statusText);
            setMessage('Produkt o podanej nazwie już istnieje')
        }
    }

    return (
        <div className="add-product-div-wrapper" style={{ display: isDisplayed ? 'flex' : 'none' }}>
            <form onSubmit={submit}>
                <AddProductTextInput vlaue={name} onChange={handleName}/>  
                <AddProductNumberInput inputType="energy" value={energy} onChange={handleEnergy} />
                <AddProductNumberInput inputType="proteins" value={proteins} onChange={handleProteins} />
                <AddProductNumberInput inputType="carbohydrates" value={carbohydrates} onChange={handleCarbohydrates} />
                <AddProductNumberInput inputType="fats" value={fats} onChange={handleFats} />
                <div>
                    <Button buttonType="submit" className="add-product-button-wrapper" onClick={()=>{}} buttonTittle="dodaj" />
                    <Button buttonType="button" className="close-add-product-div-button-wrapper" onClick={close} buttonTittle="Zamknij" />
                </div>
            </form>
            {message && <div>{message}</div>}
        </div>
    );
}

export default AddProductDiv;