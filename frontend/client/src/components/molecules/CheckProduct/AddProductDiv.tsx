import React, {useEffect, useState, SyntheticEvent} from "react";
import "../../../styles/index.scss";


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

    const submit = async (e: SyntheticEvent) =>{
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/register', {
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
        <form>
          
        </form>
      </div>
    );
}

export default AddProductDiv;