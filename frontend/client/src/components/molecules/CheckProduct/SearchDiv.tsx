import React, {useState, useContext, useEffect,} from "react";
import SearchProductInput from "../../atoms/inputs/SearchProductInput";
import ProductSearchList from "../../atoms/lists/ProductSearchList";
import "../../../styles/index.scss";
import { UserAuth } from "../../../context/UserDataContext";
import AddProductDiv from "./AddProductDiv";


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
    handleProductClick: (product: Product) => void;
}

const SearchDiv = ({handleProductClick}: SearchDivProps) => {

    const {user} = useContext(UserAuth);
    const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
    const [results, setResults] = useState<Product[]>([]);
    const [addDivClass, setAddDivClass] = useState('');

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

    useEffect(() => {
        if (user && user.is_active) {
            setAddDivClass('active-add-product-div-button-wrapper');
        } else {
            setAddDivClass('no-active-add-product-div-button-wrapper');
            setIsDisplayed(false);
        }
    }, [user]);

    const addProduct = () => {
        if(user){
            if(user.is_active){
                setIsDisplayed(true);
            }
            else{
                alert('Aby dodać produkt musisz aktywować swoje konto, jesli nie otrzymałes linku aktywujacego wejdz w zakładke Moje Konto i wyslij ponownie link');
            }
        }
        else{
            alert(`Aby dodać produkt musisz być zalogowany!`);
        }
    };

    return (
        <div className="search-div-wrapper">
            <SearchProductInput fetchProduct={fetchProduct} addDivClass={addDivClass} addProduct={addProduct}/>
            <ProductSearchList results={results} handleProductClick={handleProductClick} />
            <AddProductDiv isDisplayed={isDisplayed} setIsDisplayed={setIsDisplayed} />
        </div>
    );
}

export default SearchDiv;