import React, { useState } from "react";
import DietMealProduct from "../../../../atoms/DietMealProduct/DietMealProduct";
import upperFirstLetter from "../../../../../utils/UpperFirstLetter";


interface DietMeal {
    id: number, 
    diet_id: number, 
    meal: number, 
    name: string, 
    describe: string, 
    product1_weight: number | null, 
    product1_id: number | null,
    product2_weight: number | null, 
    product2_id: number | null,
    product3_weight: number | null, 
    product3_id: number | null,
    product4_weight: number| null, 
    product4_id: number | null,
    product5_weight: number | null, 
    product5_id: number | null,
    product6_weight: number | null, 
    product6_id: number | null,
    product7_weight: number | null, 
    product7_id: number | null,
    product8_weight: number | null, 
    product8_id: number | null,
    product9_weight: number | null, 
    product9_id: number | null,
    product10_weight: number | null, 
    product10_id: number | null,
    product11_weight: number | null, 
    product11_id: number | null,
    product12_weight: number | null, 
    product12_id: number | null
}

type DietMealExampleProps= {
    meal: DietMeal[];
}

const DietMealExample = ({meal}: DietMealExampleProps) => {

    const [divVisibility, setDivVisibility] = useState<boolean[]>([]);
    
    const toggleDisplay = (index:number) => {
        const updatedVisibility = [...divVisibility];
        updatedVisibility[index] = !updatedVisibility[index];
        setDivVisibility(updatedVisibility);
    }

    return (
        <div className="diet-meal-example-div-wrapper">
            {meal.map((diet_meal: DietMeal) => (
                <div key={diet_meal.id} className="single-meal-div-wrapper">
                    <span className="meal-name-span" style={{color: divVisibility[diet_meal.id] ? '#008efc' : '#333333', transform: divVisibility[diet_meal.id] ? 'scale(1.1)' : '' }} onClick={() => toggleDisplay(diet_meal.id)}>{upperFirstLetter(diet_meal.name)}</span>
                    <div style={{ display: divVisibility[diet_meal.id] ? 'flex' : 'none', flexDirection: 'column', marginBottom: '10px'}}>
                        <div className="meal-describe-div-wrapper">
                            <span className="meal-temp-span">Opis:</span>
                            <p>{diet_meal.describe}</p>
                        </div>
                        <span className="meal-temp-span">Składniki:</span>
                        {diet_meal.product1_id ? <DietMealProduct product_id={diet_meal.product1_id} product_weight={diet_meal.product1_weight} />: null}
                        {diet_meal.product2_id ? <DietMealProduct product_id={diet_meal.product2_id} product_weight={diet_meal.product2_weight} />: null}
                        {diet_meal.product3_id ? <DietMealProduct product_id={diet_meal.product3_id} product_weight={diet_meal.product3_weight} />: null}
                        {diet_meal.product4_id ? <DietMealProduct product_id={diet_meal.product4_id} product_weight={diet_meal.product4_weight} />: null}
                        {diet_meal.product5_id ? <DietMealProduct product_id={diet_meal.product5_id} product_weight={diet_meal.product5_weight} />: null}
                        {diet_meal.product6_id ? <DietMealProduct product_id={diet_meal.product6_id} product_weight={diet_meal.product6_weight} />: null}
                        {diet_meal.product7_id ? <DietMealProduct product_id={diet_meal.product7_id} product_weight={diet_meal.product7_weight} />: null}
                        {diet_meal.product8_id ? <DietMealProduct product_id={diet_meal.product8_id} product_weight={diet_meal.product8_weight} />: null}
                        {diet_meal.product9_id ? <DietMealProduct product_id={diet_meal.product9_id} product_weight={diet_meal.product9_weight} />: null}
                        {diet_meal.product10_id ? <DietMealProduct product_id={diet_meal.product10_id} product_weight={diet_meal.product10_weight} />: null}
                        {diet_meal.product11_id ? <DietMealProduct product_id={diet_meal.product11_id} product_weight={diet_meal.product11_weight} />: null}
                        {diet_meal.product12_id ? <DietMealProduct product_id={diet_meal.product12_id} product_weight={diet_meal.product12_weight} />: null}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DietMealExample;