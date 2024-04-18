import React, { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DietTargetInput from "./DietTargetInput";
import DietEatingInput from "./DietEatingInput";
import DietAlergiesInput from "./DietAlergiesInput";
import DietHealthProblemsInput from "./DietHealthProblemsInput";
import Button from "../../../atoms/buttons/Button";
import { ROUTER_PATH } from "../../../../router/RouterPath";
import { getUserWithExpiry } from "../../../../utils/LocalStorageManagment";
import { SESSION } from "../../../../constant/Session";


type DietQuestionnaireFormProps = {
    diet_type: string | undefined;
}

const DietQuestionnaireForm = ({diet_type}: DietQuestionnaireFormProps) =>{

    const user_id = getUserWithExpiry(SESSION.USER).id;
    const [expiry_days, setExpiry_days] = useState<number | null>(null); 
    const navigate = useNavigate();
    const [target, setTarget] = useState<null | string>(null);
    const [eating, setEating] = useState<null | string>(null);
    const [allergies, setAlergies] = useState<null | string>(null);
    const [health_problems, setHealthProblems] = useState<null | string>(null);
    const [price, setPrice] = useState<number | null>(null);


    const fetchDietPrice = async () =>{
        const price_response = await fetch(`http://localhost:8000/api/diets_prices/get_single?d_type=${diet_type}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        if (price_response.ok){
            const price_content = await price_response.json();
            if (diet_type === 'basic' && price_content.basic) {setPrice(price_content.basic);} 
            else if (diet_type === 'comfort' && price_content.comfort) {setPrice(price_content.comfort);} 
            else if (diet_type === 'complex' && price_content.complex) {setPrice(price_content.complex);} 
            else {console.log("Błąd: Nieprawidłowa wartość ceny diety.");}
        } else {console.log(price_response.status, price_response.statusText);}
    }

    const craeteOrder =  async (e: SyntheticEvent) =>{
        e.preventDefault();

        const message_response = await fetch('http://localhost:8000/api/user_messages/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                health_problems,
                allergies,
                eating,
                target
            })
        });
        if (message_response.ok) {

            const message_response_content = await message_response.json();
            const user_message_id = message_response_content.id;
        
            const diet_response = await fetch('http://localhost:8000/api/diets/add', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
            });

            if (diet_response.ok) {
                
                const diet_response_content = await diet_response.json();
                const diet_id = diet_response_content.id;

                const order_response = await fetch('http://localhost:8000/api/orders/create_order', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                    user_id,
                    diet_id,
                    user_message_id,
                    expiry_days,
                    price,
                    diet_type
                    })
                });

                if (order_response.ok) {
                    navigate(ROUTER_PATH.DIET_PURCHASED); 
                    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {console.log(order_response.status, order_response.statusText); }
            } else {console.log(diet_response.status, diet_response.statusText); }
        } else {console.log(message_response.status, message_response.statusText); }
    }

    useEffect (()=>{
        if (diet_type === 'basic'){ setExpiry_days(45); }
        else if (diet_type === 'comfort'){ setExpiry_days(90); }
        else if (diet_type === 'complex'){ setExpiry_days(180); }
        else {setExpiry_days(null);}
        fetchDietPrice();
    }, [diet_type]);

    return (
        <>
            <h5>Wypełnij ankiete</h5>
            <div className="diet-questionnaire-form-div-wrapper">
                <form onSubmit={craeteOrder}>
                    <div className="diet-questionnaire-form-parts-div-wrapper">
                        <div className="diet-questionnaire-form-part1-div-wrapper">
                            <DietTargetInput setTarget={setTarget} />
                            <DietEatingInput setEating={setEating} />
                        </div>
                        <div className="diet-questionnaire-form-part2-div-wrapper">
                            <DietAlergiesInput setAlergies={setAlergies} />
                            <DietHealthProblemsInput setHealthProblems={setHealthProblems} />
                        </div>
                    </div>
                    <Button buttonType="submit" className="create-order-button" onClick={()=>{}} buttonTittle="Przejdź do platności &#10148;"/> 
                </form>
            </div>
        </>
    );
}

export default DietQuestionnaireForm;