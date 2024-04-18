import React, { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SetNewPriceForm from "../../molecules/AdminDiets/SetNewPriceForm";


const AdminDietsOrganism = () => {

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
        <div className="admin-diets-organism-div-wrapper">
            <h5>Plany Dietetyczne</h5>
            <div className="actuall-prices-div-wrapper">
                <span className="actuall-prices-title-span">Aktualne ceny:</span>
                <div className="each-one-price-div-wrapper">
                    <label>1) Plan Basic - {priceBasic} zł</label>
                    <span className="give-new-price-span">Podaj nową cenę:</span> 
                    <SetNewPriceForm diet_type="basic"/>
                </div>
                <div className="each-one-price-div-wrapper">
                    <label>2) Plan Comfort - {priceComfort} zł</label>
                    <span className="give-new-price-span">Podaj nową cenę:</span>  
                    <SetNewPriceForm diet_type="comfort"/>
                </div>
                <div className="each-one-price-div-wrapper">
                    <label>3) Plan Complex - {priceComplex} zł</label>
                    <span className="give-new-price-span">Podaj nową cenę:</span>  
                    <SetNewPriceForm diet_type="complex"/>
                </div>
            </div>
        </div>
    );
}
export default AdminDietsOrganism;