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
  

type DietMealProductProps = {
    product_id: number;
    product_weight: number | null;
}

const DietMealProduct = ({product_id, product_weight}: DietMealProductProps) => {

    const [product, setProduct] = useState<Product>();

    const fetchProduct = async () =>{
        const response = await fetch(`http://localhost:8000/api/products/getbyid?product_id=${product_id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        if (response.ok) {
            const content = await response.json();
            setProduct(content);
        }
    }

    useEffect( ()=>{
        fetchProduct();
    },[])

    return(
        <div className="diet-meal-product-div-wrapper">
            <p className="diet-meal-details-p1">{upperFirstLetter(product?.name)}</p><p className="diet-meal-details-p2">{product_weight} g</p>
        </div>
    )
    
}

export default DietMealProduct;