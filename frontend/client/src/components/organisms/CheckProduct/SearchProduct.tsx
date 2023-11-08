import React, {useEffect, useState, SyntheticEvent} from "react";
import "../../../styles/index.scss";
import ChooseDiv from "../../molecules/CheckProduct/ChooseDiv";
import SearchDiv from "../../molecules/CheckProduct/SearchDiv";
import AddProductDiv from "../../molecules/CheckProduct/AddProductDiv";


type SearchProductProps = {
  isLogged: boolean
}

interface Product {
    id: number,
    name: string,
    weight: number,
    energy: number,
    proteins: number,
    carbohydrates: number,
    fats: number
  }

const SearchProduct = ({isLogged}: SearchProductProps) => {
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
    if (isLogged === true){
      setSelectedProduct(null);
      setIsDisplayed(true);
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
    if (isLogged) {
      setAddDivClass('active-add-product-div-wrapper');
    } else {
      setAddDivClass('no-active-add-product-div-wrapper');
    }
  }, [isLogged]);

  return (
    <div>
      <SearchDiv input={input} handleChange={handleChange} addDivClass={addDivClass} addProduct={addProduct} results={results} handleProductClick={handleProductClick} />
      <ChooseDiv selectedProduct={selectedProduct} />
      <AddProductDiv isDisplayed={isDisplayed} />
    </div>
  );
};

export default SearchProduct;