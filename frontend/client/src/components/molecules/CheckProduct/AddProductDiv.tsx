import React, {useEffect, useState, SyntheticEvent} from "react";
import "../../../styles/index.scss";
import { AddProductTextInput, AddProductNumberInput } from "../../atoms/inputs/AddProductInput";
import Button from "../../atoms/buttons/Button";


type AddProductDivProps = {
    isDisplayed: boolean;
}

const AddProductDiv = ({isDisplayed}: AddProductDivProps) => {

    const [message, setMessage] = useState('');
    const [name, setName] = useState<string>('');
    const [energy, setEnergy] = useState<number>(0);
    const [proteins, setProteins] = useState<number>(0);
    const [carbohydrates, setCarbohydrates] = useState<number>(0);
    const [fats, setFats] = useState<number>();

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
            setMessage('ok');
        }
        else{
            console.error('Error', response.status, response.statusText);
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
                <Button buttonType="submit" className="add-product-button-wrapper" onClick={()=>{}} buttonTittle="dodaj" />
            </form>
            {message && <div>{message}</div>}
      </div>
    );
}

export default AddProductDiv;