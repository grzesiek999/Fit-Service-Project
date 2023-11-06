import React from "react";
import SearchProductInput from "../../atoms/inputs/SearchProductInput";
import ProductSearchList from "../../atoms/lists/ProductSearchList";
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

type SearchDivProps = {
    input: string;
    handleChange: (value: string) => void;
    addDivClass: string;
    addProduct: () => void;
    results: Product[];
    handleProductClick: (product: Product) => void;
}

const SearchDiv = ({input, handleChange, addDivClass, addProduct, results, handleProductClick}: SearchDivProps) => {

    return (
    <div className="search-div-wrapper">
        <SearchProductInput input={input} handleChange={handleChange} addDivClass={addDivClass} addProduct={addProduct}/>
        <ProductSearchList results={results} handleProductClick={handleProductClick} />
      </div>
    );
}

export default SearchDiv;