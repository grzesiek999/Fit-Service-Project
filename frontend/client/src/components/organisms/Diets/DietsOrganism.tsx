import React, { useEffect, useState } from "react";
import Button from "../../atoms/buttons/Button";
import { useNavigate } from "react-router-dom";


const DietsOrganism = () => {

    const navigate = useNavigate();
    const [priceBasic, setPriceBasic] = useState(null);
    const [priceComfort, setPriceComfort] = useState(null);
    const [priceComplex, setPriceComplex] = useState(null);

    const fetchPrices = async () =>{
        const url = `http://localhost:8000/api/diets_prices/get?d1_type=basic&d2_type=comfort&d3_type=complex`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        if (response.ok) {
            const content = await response.json();
            setPriceBasic(content.basic);
            setPriceComfort(content.comfort);
            setPriceComplex(content.complex);
        }
        else { console.log("price fetch error", response.status, response.statusText)}
    }

    useEffect (()=>{
        fetchPrices();
    }, []);


    return (
        <div className="diets-organism-div-wrapper">
            <span className="diets-title-span">Plany dietetyczne</span>
            <div className="diets-offers-div-wrapper">
                <div className="diet-offer-div-wrapper">
                    <span className="diet-offer-title-span">Pakiet Basic</span>
                    <span className="diet-offer-text-span">Kompleksowy pakiet opieki dietetycznej na okres <span className="diet-offer-bold-text-span">45 dni</span>.</span>
                    <span id="tl" className="diet-offer-text-span">Zawiera:</span>
                    <ul> 
                        <li>spersonalizowana dieta pod indywidualne potrzebny</li> 
                        <li>konsultacje dietetyczne</li>
                    </ul>
                    <span className="diet-offer-price-span">{priceBasic} zł</span>
                    <Button buttonType="button" className="buy-diet-button" onClick={()=>{ navigate('/diet/basic/questionnaire'); document.body.scrollIntoView({ behavior: "smooth", block: "start" });}} buttonTittle="Biorę !" />
                </div>
                <div className="diet-offer-div-wrapper">
                    <span className="diet-offer-title-span">Pakiet Comfort</span>
                    <span className="diet-offer-text-span">Kompleksowy pakiet opieki dietetycznej na okres <span className="diet-offer-bold-text-span">90 dni</span>.</span>
                    <span id="tl" className="diet-offer-text-span">Zawiera:</span>
                    <ul> 
                        <li>spersonalizowana dieta pod indywidualne potrzebny</li> 
                        <li>konsultacje dietetyczne</li>
                        <li>aktualizacje posiłków</li>
                    </ul>
                    <span className="diet-offer-price-span">{priceComfort} zł</span>
                    <Button buttonType="button" className="buy-diet-button" onClick={()=>{ navigate('/diet/comfort/questionnaire'); document.body.scrollIntoView({ behavior: "smooth", block: "start" });}} buttonTittle="Biorę !" />
                </div>
                <div className="diet-offer-div-wrapper">
                    <span className="diet-offer-title-span">Pakiet Complex</span>
                    <span className="diet-offer-text-span">Kompleksowy pakiet opieki dietetycznej na okres <span className="diet-offer-bold-text-span">180 dni</span>.</span>
                    <span id="tl" className="diet-offer-text-span">Zawiera:</span>
                    <ul> 
                        <li>spersonalizowana dieta pod indywidualne potrzebny</li> 
                        <li>konsultacje dietetyczne</li>
                        <li>aktualizacje posiłków</li>
                        <li>kontrola osiąganych efektów</li>
                        <li>aktualizacja planu dietetycznego</li>
                    </ul>
                    <span className="diet-offer-price-span">{priceComplex} zł</span>
                    <Button buttonType="button" className="buy-diet-button" onClick={()=>{ navigate('/diet/complex/questionnaire'); document.body.scrollIntoView({ behavior: "smooth", block: "start" });}} buttonTittle="Biorę !" />
                </div>
            </div>
        </div>
    );
}

export default DietsOrganism;