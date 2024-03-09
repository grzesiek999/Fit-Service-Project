import React, {useState, useContext, useEffect,} from "react";
import SearchProductInput from "../../../atoms/inputs/SearchProductInput";
import ProductSearchList from "../../../atoms/lists/ProductSearchList";
import { UserAuth } from "../../../../context/UserDataContext";
import AddProductDiv from "./AddProductDiv";


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

type SearchDivProps = {
    handleProductClick: (product: Product) => void;
}

const SearchDiv = ({handleProductClick}: SearchDivProps) => {

    const {user} = useContext(UserAuth);
    const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
    const [results, setResults] = useState<Product[]>([]);

    const fetchProduct = (value:string) => {
        fetch("http://localhost:8000/api/products/get")
          .then((response) => response.json())
          .then((json) => {
            const results = json.filter((product:Product) => {
              return (
                value &&
                product &&
                product.name &&
                product.name.toLowerCase().includes(value)
              );
            });
            setResults(results);
          });
    };

    const addProduct = () => {
        if(user){
            if(user.is_active){
                if(isDisplayed===false) {setIsDisplayed(true);}
                else {setIsDisplayed(false);}
            }
        }
    };

    return (
        <div className="search-div-wrapper">
            <span className="search-title-span">Wprowadź nazwę produktu jaki chcesz sprawdzić:</span>
            <SearchProductInput fetchProduct={fetchProduct} addProduct={addProduct} is_admin={user?.is_admin}/>
            <ProductSearchList results={results} handleProductClick={handleProductClick} />
            {user?.is_admin ?<AddProductDiv isDisplayed={isDisplayed} setIsDisplayed={setIsDisplayed} /> : null}
        </div>
    );
}

export default SearchDiv;