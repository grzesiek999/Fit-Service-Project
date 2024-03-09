import React from "react";
import "../../../styles/index.scss";

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

type ProductSearchListProps = {
    results: Product[];
    handleProductClick: (product: Product) => void;
}

const ProductSearchList = ({results, handleProductClick}: ProductSearchListProps ) => {
    
    return (
        <ul>
          {results.map((product: Product) => (
            <li key={product.id} onClick={() => handleProductClick(product)}>
              {product.name}
            </li>
            ))}
        </ul>
    );
}

export default ProductSearchList;