import React, { useState } from "react";
import Button from "../../atoms/buttons/Button";


type setNewBasicPriceProps = {
    diet_type: string
}

const setNewBasicPrice = ({diet_type}: setNewBasicPriceProps) => {

    const [price, setNewPrice] = useState<number | null>(null);

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = '';
    };
        
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = '0';
    };

    const handleNewPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setNewPrice(null); }
        else {
            const new_price = parseFloat(e.target.value);
            setNewPrice(new_price);
        }
    }

    const submitPrice = async () => {
        const response = await fetch('http://localhost:8000/api/diets_prices/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                diet_type,
                price
            })
        });
    }

    return(
        <form onSubmit={submitPrice}>
            <input 
                type='number' 
                step={0.01}
                className='set-new-price-input'
                placeholder="0"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleNewPrice}
            />
           <Button buttonType="submit" className="set-new-price-button" onClick={()=>{}} buttonTittle="Zmień" />
        </form>
    );
}

export default setNewBasicPrice;