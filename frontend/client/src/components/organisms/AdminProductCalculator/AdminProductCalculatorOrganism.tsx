import React, {useState} from "react";
import CheckProductInformator from "../../molecules/Calculators/CheckProduct/ChceckProductInformator";
import ChooseDiv from "../../molecules/Calculators/CheckProduct/ChooseDiv";
import SearchDiv from "../../molecules/Calculators/CheckProduct/SearchDiv";
import EditProductDiv from "../../molecules/Calculators/CheckProduct/EditProductDiv";



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


const AdminProductCalculatorOrganism = () => {

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleProductClick = (product: Product) => {
      setSelectedProduct(product);
    };
  
    return (
      <div className="check-product-organism-div-wrapper">
        <h5>Dodawaj, modyfikuj produktu wraz z ich makroskładnikami</h5>
        <div className="search-choose-div-wrapper">
          <SearchDiv  handleProductClick={handleProductClick} />
          <ChooseDiv selectedProduct={selectedProduct} />
        </div>
      </div>
    );
}

export default AdminProductCalculatorOrganism;