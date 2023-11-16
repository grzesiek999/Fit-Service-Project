import React, {useContext, useEffect, useState} from "react";
import "../../../styles/index.scss";
import ChooseDiv from "../../molecules/CheckProduct/ChooseDiv";
import SearchDiv from "../../molecules/CheckProduct/SearchDiv";
import AddProductDiv from "../../molecules/CheckProduct/AddProductDiv";
import { UserAuth } from "../../../context/UserDataContext";


interface Product {
    id: number,
    name: string,
    weight: number,
    energy: number,
    proteins: number,
    carbohydrates: number,
    fats: number
}

const SearchProduct = () => {

  const {user} = useContext(UserAuth);
  const [input, setInput] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [results, setResults] = useState<Product[]>([]);
  const [addDivClass, setAddDivClass] = useState('');
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);

  const fetchData = (value:string) => {
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
        setSelectedProduct(null);
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

  const handleChange = (value:string) => {
    setInput(value);
    fetchData(value);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  useEffect(() => {
    if (user && user.is_active) {
      setAddDivClass('active-add-product-div-button-wrapper');
    } else {
      setAddDivClass('no-active-add-product-div-button-wrapper');
    }
  }, [user]);

  return (
    <div>
      <SearchDiv input={input} handleChange={handleChange} addDivClass={addDivClass} addProduct={addProduct} results={results} handleProductClick={handleProductClick} />
      <ChooseDiv selectedProduct={selectedProduct} />
      <AddProductDiv isDisplayed={isDisplayed} setIsDisplayed={setIsDisplayed} />
    </div>
  );
};

export default SearchProduct;