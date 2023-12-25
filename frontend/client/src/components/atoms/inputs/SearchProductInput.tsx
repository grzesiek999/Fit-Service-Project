import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CgAdd } from "react-icons/cg";
import "../../../styles/index.scss";


type SearchProductInputProps = {
    fetchProduct: (value: string) => void;
    addDivClass: string;
    addProduct: () => void;
}

const SearchProductInput = ({fetchProduct, addDivClass, addProduct}: SearchProductInputProps) => {

    const [input, setInput] = useState("");

    const handleChange = (value:string) => {
        setInput(value);
        fetchProduct(value);
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = '';
    };
          
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = 'Szukaj';
    };

    return (
        <div className="search-bar-div-wrapper">
            <FaSearch className="search-icon"/>
            <input
                placeholder="Szukaj"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <div className={addDivClass} onClick={addProduct}>
                <CgAdd className="add-icon" />
                <p>dodaj</p>
            </div>
        </div>
    );
}

export default SearchProductInput;