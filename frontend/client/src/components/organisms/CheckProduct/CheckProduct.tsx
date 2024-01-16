import React, {useState} from "react";
import "../../../styles/index.scss";
import ChooseDiv from "../../molecules/CheckProduct/ChooseDiv";
import SearchDiv from "../../molecules/CheckProduct/SearchDiv";


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

const CheckProduct = () => {

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <SearchDiv  handleProductClick={handleProductClick} />
      <ChooseDiv selectedProduct={selectedProduct} />
    </div>
  );
};

export default CheckProduct;