import React from "react";
import { FaSearch } from "react-icons/fa";
import { CgAdd } from "react-icons/cg";
import "../../../styles/index.scss";


type SearchProductInputProps = {
    input: string;
    handleChange: (value: string) => void;
    addDivClass: string;
    addProduct: () => void;
}

const SearchProductInput = ({input, handleChange, addDivClass, addProduct}: SearchProductInputProps) => {
    return (
        <div className="search-bar-div-wrapper">
            <FaSearch className="search-icon"/>
            <input
            placeholder="Szukaj"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            />
            <div className={addDivClass} onClick={addProduct}>
            <CgAdd className="add-icon" />
            <p>dodaj</p>
        </div>
      </div>
    );
}

export default SearchProductInput;