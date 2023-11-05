import React, {useState} from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import "../../styles/index.scss";


interface Product {
    id: number,
    name: string,
    weight: number,
    energy: number,
    proteins: number,
    carbohydrates: number,
    fats: number
  }

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [results, setResults] = useState<Product[]>([]);


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

  const handleChange = (value:string) => {
    setInput(value);
    fetchData(value);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <div className="search-div-wrapper">
        <div className="search-bar-div-wrapper">
          <FaSearch className="search-icon"/>
          <input
            placeholder="Szukaj"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <FaPlus className="add-icon"/>
        </div>
        <ul className="search-results-ul-wrapper">
          {results.map((product) => (
            <li className="search-result-li-wrapper" key={product.id} onClick={() => handleProductClick(product)}>
              {product.name}
            </li>
            ))}
        </ul>
      </div>
        {selectedProduct && (
          <div className="search-choose-div-wrapper">
            <p>{selectedProduct.name}</p>
            <p>Waga: {selectedProduct.weight}g</p>
            <p>Energia: {selectedProduct.energy} kcal</p>
            <p>Białko: {selectedProduct.proteins} g</p>
            <p>Węglowodany: {selectedProduct.carbohydrates} g</p>
            <p>Tłuszcze: {selectedProduct.fats} g</p>
          </div>
        )}
    </div>
  );
};

export default SearchBar;