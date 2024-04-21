import React, { SyntheticEvent, useEffect, useState } from "react";
import AddMealInput from "../../atoms/inputs/AddMealInput";
import SearchDiv from "../Calculators/CheckProduct/SearchDiv";
import Button from "../../atoms/buttons/Button";
import { useParams } from "react-router-dom";


interface Product {
    id: number,
    name: string,
    weight: number,
    energy: number,
    proteins: number,
    carbohydrates: number,
    fats: number,
    fiber: number
}

type AddMealDetailsProps = {
    setTempWeight: (param: number | null) => void;
    tempWeight: number | null;
    setSelectedProduct: (product: Product) => void;
    selectedProduct: Product | null;
}

const AddMealDetails = ({setTempWeight, tempWeight, setSelectedProduct, selectedProduct}: AddMealDetailsProps) => {

    const {diet_id} = useParams();
    const [meal, setMeal] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [describe, setDescribe] = useState<string>('');
    const [product1_weight, setProduct1Weight] = useState<number | null>(null); 
    const [product1_id, setProduct1ID] = useState<number | null>(null); 
    const [product2_weight, setProduct2Weight] = useState<number | null>(null); 
    const [product2_id, setProduct2ID] = useState<number | null>(null); 
    const [product3_weight, setProduct3Weight] = useState<number | null>(null); 
    const [product3_id, setProduct3ID] = useState<number | null>(null); 
    const [product4_weight, setProduct4Weight] = useState<number | null>(null); 
    const [product4_id, setProduct4ID] = useState<number | null>(null); 
    const [product5_weight, setProduct5Weight] = useState<number | null>(null); 
    const [product5_id, setProduct5ID] = useState<number | null>(null); 
    const [product6_weight, setProduct6Weight] = useState<number | null>(null); 
    const [product6_id, setProduct6ID] = useState<number | null>(null); 
    const [product7_weight, setProduct7Weight] = useState<number | null>(null); 
    const [product7_id, setProduct7ID] = useState<number | null>(null); 
    const [product8_weight, setProduct8Weight] = useState<number | null>(null); 
    const [product8_id, setProduct8ID] = useState<number | null>(null); 
    const [product9_weight, setProduct9Weight] = useState<number | null>(null); 
    const [product9_id, setProduct9ID] = useState<number | null>(null); 
    const [product10_weight, setProduct10Weight] = useState<number | null>(null); 
    const [product10_id, setProduct10ID] = useState<number | null>(null); 
    const [product11_weight, setProduct11Weight] = useState<number | null>(null); 
    const [product11_id, setProduct11ID] = useState<number | null>(null); 
    const [product12_weight, setProduct12Weight] = useState<number | null>(null); 
    const [product12_id, setProduct12ID] = useState<number | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [whichProduct, setWhichProduct] = useState<number>(1);



    const handleMealChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const mealString = e.target.value.trim();
        const mealNumber = parseInt(mealString);
        setMeal(mealNumber);
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    
    const handleDescribeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescribe(e.target.value);
    }

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const weightString = e.target.value.trim();
        if (weightString === '') { setTempWeight(null); }
        else {
            const temp_weight = parseInt(weightString);
            setTempWeight(temp_weight);
        }
    }

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
        setTempWeight(100);
    };

    const handleChangeDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescribe(event.target.value);
    }

    const AddProductToMeal = () => {
        if(selectedProduct){
            if (whichProduct === 1) { setProduct1ID(selectedProduct.id); setProduct1Weight(tempWeight); setWhichProduct(2); return; }
            else if (whichProduct === 2) { setProduct2ID(selectedProduct.id); setProduct2Weight(tempWeight); setWhichProduct(2); return; }
            else if (whichProduct === 3) { setProduct3ID(selectedProduct.id); setProduct3Weight(tempWeight); setWhichProduct(2); return; }
            else if (whichProduct === 4) { setProduct4ID(selectedProduct.id); setProduct4Weight(tempWeight); setWhichProduct(2); return; }
            else if (whichProduct === 5) { setProduct5ID(selectedProduct.id); setProduct5Weight(tempWeight); setWhichProduct(2); return; }
            else if (whichProduct === 6) { setProduct6ID(selectedProduct.id); setProduct6Weight(tempWeight); setWhichProduct(2); return; }
            else if (whichProduct === 7) { setProduct7ID(selectedProduct.id); setProduct7Weight(tempWeight); setWhichProduct(2); return; }
            else if (whichProduct === 8) { setProduct8ID(selectedProduct.id); setProduct8Weight(tempWeight); setWhichProduct(2); return; }
            else if (whichProduct === 9) { setProduct9ID(selectedProduct.id); setProduct9Weight(tempWeight); setWhichProduct(2); return; }
            else if (whichProduct === 10) { setProduct10ID(selectedProduct.id); setProduct10Weight(tempWeight); setWhichProduct(2); return; }
            else if (whichProduct === 11) { setProduct11ID(selectedProduct.id); setProduct11Weight(tempWeight); setWhichProduct(2); return; }
            else if (whichProduct === 12) { setProduct12ID(selectedProduct.id); setProduct12Weight(tempWeight); setWhichProduct(2); return; }
            else { setMessage('Nie mozesz dodać więcej produktów do tego posiłku !'); return; }
        }
        else return;
    }

    const AddMealToDiet = async () => {
        const response = await fetch('http://localhost:8000/api/diet_meals/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                diet_id,
                meal,
                name,
                describe,
                product1_weight,
                product1_id,
                product2_weight,
                product2_id,
                product3_weight,
                product3_id,
                product4_weight,
                product4_id,
                product5_weight,
                product5_id,
                product6_weight,
                product6_id,
                product7_weight,
                product7_id,
                product8_weight,
                product8_id,
                product9_weight,
                product9_id,
                product10_weight,
                product10_id,
                product11_weight,
                product11_id,
                product12_weight,
                product12_id,
            })
        });
        if(response.ok) {

        }
    }

    return (
        <div className="add-meals-to-user-diet-div-wrapper">
            <span className="add-meals-title-span">Dodaj posiłki do jadłospisu użytkownika: </span>
            <form onSubmit={AddMealToDiet}>
                <AddMealInput inputType='meal' value={null} weightValue={null} onChange={()=>{}} onChangeMeal={handleMealChange} onChangeDesc={()=>{}}/>
                <AddMealInput inputType='name' value={name} weightValue={null} onChange={handleNameChange} onChangeMeal={()=>{}} onChangeDesc={()=>{}}/>
                {message ? <span>{message}</span> : null}
                <SearchDiv handleProductClick={handleProductClick} />
                <AddMealInput inputType='weight' value={null} weightValue={tempWeight} onChange={handleWeightChange} onChangeMeal={()=>{}} onChangeDesc={handleDescribeChange}/>
                <Button buttonType="button" className="add-product-to-meal-button" onClick={AddProductToMeal} buttonTittle="Dodaj produkt do posiłku &#10148;" />
                <AddMealInput inputType='describe' value={describe} weightValue={null} onChange={()=>{}} onChangeMeal={()=>{}} onChangeDesc={handleChangeDesc}/>
                <Button buttonType="submit" className="" onClick={()=>{}} buttonTittle="Dodaj posiłek do diety" />
            </form>
        </div>
    );
}

export default AddMealDetails;