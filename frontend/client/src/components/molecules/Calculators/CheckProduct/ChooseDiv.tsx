import React from "react";


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

type ChooseDivProps = {
  selectedProduct: Product | null;
}

const ChooseDiv = ({selectedProduct}: ChooseDivProps) => {
  return (
    <div>
      {selectedProduct && (
        <div className="search-choose-div-wrapper">
          <p>{selectedProduct.name}</p>
          <p>Waga: {selectedProduct.weight}g</p>
          <p>Energia: {selectedProduct.energy} kcal</p>
          <p>Białko: {selectedProduct.proteins} g</p>
          <p>Węglowodany: {selectedProduct.carbohydrates} g</p>
          <p>Tłuszcze: {selectedProduct.fats} g</p>
          <p>Błonnik: {selectedProduct.fiber} g</p>
        </div>
      )}
    </div>
  );
}

export default ChooseDiv;