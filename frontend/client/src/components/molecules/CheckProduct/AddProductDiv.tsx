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
    const [energy, setEnergy] = useState<number>(0);
    const [proteins, setProteins] = useState<number>(0);
    const [carbohydrates, setCarbohydrates] = useState<number>(0);
    const [fats, setFats] = useState<number>(0);

    const handleName = (name :string) => {
        setName(name);
    };

    const handleEnergy = (energy: number) => {
        setEnergy(energy);
    }

    const handleProteins = (proteins: number) => {
        setProteins(proteins);
    }

    const handleCarbohydrates = (carbohydrates: number) => {
        setCarbohydrates(carbohydrates);
    }

    const handleFats = (fats: number) => {
        setFats(fats);
    }

    const close = () => {
        setIsDisplayed(false);
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
            setEnergy(0);
            setProteins(0);
            setCarbohydrates(0);
            setFats(0);
            window.location.reload();
        }
        else{
            console.error('Error', response.status, response.statusText);
            setMessage('Produkt o podanej nazwie już istnieje')
        }
    }

    return (
        <div className="add-product-div-wrapper" style={{ display: isDisplayed ? 'flex' : 'none' }}>
            <form onSubmit={submit}>
                <AddProductTextInput inputType="name" onChange={handleName} />
                <AddProductNumberInput inputType="energy" onChange={handleEnergy} />
                <AddProductNumberInput inputType="proteins" onChange={handleProteins} />
                <AddProductNumberInput inputType="carbohydrates" onChange={handleCarbohydrates} />
                <AddProductNumberInput inputType="fats" onChange={handleFats} />
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