import React, { useContext, useState } from "react";
import Button from "../../../atoms/buttons/Button";
import { UserAuth } from "../../../../context/UserDataContext";
import upperFirstLetter from "../../../../utils/UpperFirstLetter";
import EditProductDiv from "./EditProductDiv";


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

  const {user} = useContext(UserAuth);
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);

  
  const editProduct = () => {
    if(!isDisplayed) { setIsDisplayed(true); }
    else { setIsDisplayed(false); }
  }

  const deleteProduct = async () => {
    const id = selectedProduct?.id;
    const response = await fetch('http://localhost:8000/api/products/delete_product', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id
      })
    });
    if(response.ok){ window.location.reload(); }else{ console.log(response.status, response.statusText); }
  }

  return (
    <div className="choose-div-wrapper">
        {selectedProduct && (
          <>
            <span className="choose-title-span">Wybrano: {upperFirstLetter(selectedProduct.name)}</span>    
            <ul>
              <li><p>Waga:</p><p className="p-r">{selectedProduct.weight} g</p></li>
              <li><p>Energia:</p><p className="p-r">{selectedProduct.energy} kcal</p></li>
              <li><p>Białko:</p><p className="p-r">{selectedProduct.proteins} g</p></li>
              <li><p>Węglowodany:</p><p className="p-r">{selectedProduct.carbohydrates} g</p></li>
              <li><p>Tłuszcze:</p><p className="p-r">{selectedProduct.fats} g</p></li>
              <li><p>Błonnik:</p><p className="p-r">{selectedProduct.fiber} g</p></li>
            </ul>
            {user?.is_admin &&
              <div className="admin-product-options-div-wrapper">
                <Button buttonType="button" className="edit-product-button" onClick={editProduct} buttonTittle="Edytuj" />
                <Button buttonType="button" className="delete-product-button" onClick={deleteProduct} buttonTittle="Usuń" />
              </div>
            }
            <EditProductDiv isDisplayed={isDisplayed} setIsDisplayed={setIsDisplayed} id={selectedProduct.id} name={selectedProduct.name} />
          </>
        )}
    </div>
  );
}

export default ChooseDiv;