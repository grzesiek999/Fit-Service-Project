import React from "react";
import upperFirstLetter from "../../../utils/UpperFirstLetter";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "../../../router/RouterPath";


interface Order {
    id: number;
    payment_status: boolean;
    created_at: string;
    diet_id: number;
    user_id: number;
    expiry_date: string;
    price: number;
    expiry_days: string;
    user_message_id: number;
    diet_type: string;
}


type OrderDetailsDivProps = {
    order: Order | undefined;
}

const OrderDetailsDiv = ({order}: OrderDetailsDivProps) => {

    let date;
    let formatedDate;
    let expiryDate;
    let formatedExpiryDate;

    if(order) {
        date = new Date(order.created_at);
        formatedDate = date.toISOString().split('T')[0];
        if(order.expiry_date) {
            expiryDate = new Date(order.expiry_date);
            formatedExpiryDate = expiryDate.toISOString().split('T')[0];
        }
    }

    return(
        <div className="order-details-all-div-wrapper">
            <div className="order-details-div-wrapper">
                <span className="order-details-span">Szczegóły zamówienia:</span>
                <ul>
                    <li>Data utworzenia: {formatedDate}</li>
                    <li>Status płatności: {order?.payment_status ? <span style={{color: order.payment_status ? '#009E60' : 'red'}}>Potwierdzona</span> : <span style={{color: order?.payment_status ? '#009E60' : 'red'}}>Niepotwierdzona</span>}</li>
                    <li>Cena: {order?.price} zł</li>
                    <li>Rodzaj planu: {upperFirstLetter(order?.diet_type)}</li>
                    <li>Okres opieki dietetycznej: {order?.expiry_days} dni</li>
                    {order?.expiry_date && <li>Data wygaśnięcia planu dietetycznego: {formatedExpiryDate}</li>}
                </ul>
            </div>
            {!order?.expiry_date &&
            <div className="order-options-div-wrapper">
                <Link to={`/admin/diet_plan/${order?.diet_id}/${order?.user_id}`} className="create-diet-button-wrapper" onClick={()=>{document.body.scrollIntoView({ behavior: "smooth", block: "start" });}}>Stwórz Plan Dietetyczny &#10148;</Link>
            </div>}
        </div>
    );

}

export default OrderDetailsDiv;