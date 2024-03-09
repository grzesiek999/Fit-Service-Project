import React, {useState} from "react";
import ChooseDiv from "../../../molecules/Calculators/CheckProduct/ChooseDiv";
import SearchDiv from "../../../molecules/Calculators/CheckProduct/SearchDiv";
import CheckProductInformator from "../../../molecules/Calculators/CheckProduct/ChceckProductInformator";


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
    <div className="check-product-organism-div-wrapper">
      <h5>Sprawdź energie i makroskładniki produktu</h5>
      <div className="search-choose-div-wrapper">
        <SearchDiv  handleProductClick={handleProductClick} />
        <ChooseDiv selectedProduct={selectedProduct} />
      </div>
      <CheckProductInformator />
    </div>
  );
};

export default CheckProduct;