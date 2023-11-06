import React from "react";
import "../../../styles/index.scss";

interface Product {
    id: number,
    name: string,
    weight: number,
    energy: number,
    proteins: number,
    carbohydrates: number,
    fats: number
}

type ProductSearchListProps = {
    results: Product[];
    handleProductClick: (product: Product) => void;
}

const ProductSearchList = ({results, handleProductClick}: ProductSearchListProps ) => {
    
    return (
        <ul className="search-results-ul-wrapper">
          {results.map((product: Product) => (
            <li className="search-result-li-wrapper" key={product.id} onClick={() => handleProductClick(product)}>
              {product.name}
            </li>
            ))}
        </ul>
    );
}

export default ProductSearchList;