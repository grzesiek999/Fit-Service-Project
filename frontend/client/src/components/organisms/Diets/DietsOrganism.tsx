import React, { useState } from "react";
import Button from "../../atoms/buttons/Button";


const DietsOrganism = () => {

    const [priceBasic, setPriceBasic] = useState(69);
    const [priceComfort, setPriceComfort] = useState(129);
    const [priceComplex, setPriceComplex] = useState(249);

    return (
        <div className="diets-organism-div-wrapper">
            <span className="diets-title-span">Plany dietetyczne</span>
            <div className="diets-offers-div-wrapper">
                <div className="diet-offer-div-wrapper">
                    <span className="diet-offer-title-span">Pakiet Basic</span>
                    <span className="diet-offer-text-span">Kompleksowy pakiet opieki dietetycznej na okres <span className="diet-offer-bold-text-span">45 dni</span>.</span>
                    <span id="tl" className="diet-offer-text-span">Zawiera:</span>
                    <ul> 
                        <li>speronalizowana dieta pod indywidualne potrzebny</li> 
                        <li>konsultacje dietetyczne</li>
                    </ul>
                    <span className="diet-offer-price-span">{priceBasic} zł</span>
                    <Button buttonType="button" className="buy-diet-button" onClick={()=>{}} buttonTittle="Biorę !" />
                </div>
                <div className="diet-offer-div-wrapper">
                    <span className="diet-offer-title-span">Pakiet Comfort</span>
                    <span className="diet-offer-text-span">Kompleksowy pakiet opieki dietetycznej na okres <span className="diet-offer-bold-text-span">90 dni</span>.</span>
                    <span id="tl" className="diet-offer-text-span">Zawiera:</span>
                    <ul> 
                        <li>speronalizowana dieta pod indywidualne potrzebny</li> 
                        <li>konsultacje dietetyczne</li>
                        <li>aktualizacje posiłków</li>
                    </ul>
                    <span className="diet-offer-price-span">{priceComfort} zł</span>
                    <Button buttonType="button" className="buy-diet-button" onClick={()=>{}} buttonTittle="Biorę !" />
                </div>
                <div className="diet-offer-div-wrapper">
                    <span className="diet-offer-title-span">Pakiet Complex</span>
                    <span className="diet-offer-text-span">Kompleksowy pakiet opieki dietetycznej na okres <span className="diet-offer-bold-text-span">180 dni</span>.</span>
                    <span id="tl" className="diet-offer-text-span">Zawiera:</span>
                    <ul> 
                        <li>speronalizowana dieta pod indywidualne potrzebny</li> 
                        <li>konsultacje dietetyczne</li>
                        <li>aktualizacje posiłków</li>
                        <li>kontrola osiąganych efektów</li>
                        <li>aktualizacja planu dietetycznego</li>
                    </ul>
                    <span className="diet-offer-price-span">{priceComplex} zł</span>
                    <Button buttonType="button" className="buy-diet-button" onClick={()=>{}} buttonTittle="Biorę !" />
                </div>
            </div>
        </div>
    );
}

export default DietsOrganism;