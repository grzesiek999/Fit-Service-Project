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
    <div className="choose-div-wrapper">
        {selectedProduct && (
          <>
            <span className="choose-title-span">Wybrano: {selectedProduct.name}</span>    
            <ul>
              <li><p>Waga:</p><p className="p-r">{selectedProduct.weight} g</p></li>
              <li><p>Energia:</p><p className="p-r">{selectedProduct.energy} kcal</p></li>
              <li><p>Białko:</p><p className="p-r">{selectedProduct.proteins} g</p></li>
              <li><p>Węglowodany:</p><p className="p-r">{selectedProduct.carbohydrates} g</p></li>
              <li><p>Tłuszcze:</p><p className="p-r">{selectedProduct.fats} g</p></li>
              <li><p>Błonnik:</p><p className="p-r">{selectedProduct.fiber} g</p></li>
            </ul>
          </>
        )}
    </div>
  );
}

export default ChooseDiv;