import React, { useEffect, useState } from "react";
import upperFirstLetter from "../../../utils/UpperFirstLetter";


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

type MealSummaryProps = {
    product: Product | null;
    tempWeight: number | null;
}

const MealSummary = ({product, tempWeight}: MealSummaryProps) => {

    const [kcal, setKcal] = useState<number>(0);
    const [protein, setProtein] = useState<number>(0);
    const [carbohydrates, setCarbohydrates] = useState<number>(0);
    const [fats, setFats] = useState<number>(0);
    const [fiber, setFiber] = useState<number>(0);

    useEffect(()=> {
        if(product && tempWeight) {
            setKcal(product?.energy * tempWeight / 100);
            setProtein(product?.proteins * tempWeight / 100);
            setCarbohydrates(product?.carbohydrates * tempWeight / 100);
            setFats(product?.fats * tempWeight / 100);
            setFiber(product?.fiber * tempWeight / 100);
        }
        else {
            setKcal(0);
            setProtein(0);
            setCarbohydrates(0);
            setFats(0);
            setFiber(0);
        }
    }, [product, tempWeight]);



    return (
        <div className="meal-summary-div-wrapper">
            <div className="meal-product-summary-div-wrapper">
                {product ? <span>{upperFirstLetter(product?.name)}</span> : null}
                <span>Wartość energetyczna: {kcal.toFixed(0)} kcal</span>
                <span>Białko: {protein.toFixed(1)} g.</span>
                <span>Węglowodany: {carbohydrates.toFixed(1)} g.</span>
                <span>Tłuszcze: {fats.toFixed(1)} g.</span>
                <span>Błonnik: {fiber.toFixed(1)} g.</span>
            </div>
        </div>
    );
}

export default MealSummary;