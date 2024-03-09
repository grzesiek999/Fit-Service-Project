import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CgAdd } from "react-icons/cg";
import "../../../styles/index.scss";


type SearchProductInputProps = {
    fetchProduct: (value: string) => void;
    addProduct: () => void;
    is_admin: undefined | boolean;
}

const SearchProductInput = ({fetchProduct, addProduct, is_admin}: SearchProductInputProps) => {

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
            {is_admin ?
                <div className='active-add-product-div-button-wrapper' onClick={addProduct}>
                    <CgAdd className="add-icon" />
                    <p>dodaj</p>
                </div>
            :null}
        </div>
    );
}

export default SearchProductInput;