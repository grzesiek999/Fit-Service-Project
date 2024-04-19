import React, { useEffect, useState } from "react";
import upperFirstLetter from "../../../utils/UpperFirstLetter";

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

type OrderViewProps = {
    order: Order;
}

const OrderView = ({order}: OrderViewProps) => {

    const [userFullName, setUserFullName] = useState('');

    let date = new Date(order.created_at);
    let formatedDate = date.toISOString().split('T')[0];

    const fetchUser = async () => {
        const user_id = order.user_id;
        const response = await fetch(`http://localhost:8000/api/getby_userid?user_id=${user_id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            const content = await response.json();
            setUserFullName(upperFirstLetter(content.name)+' '+upperFirstLetter(content.surname));
        }
    }

    useEffect (()=>{
        fetchUser();
    }, [order])
    
   
    return (
        <>
            <span className="orderid-span">{order.id}</span>
            <span className="user-full-name-span">{userFullName}</span>
            <span className="order-price-span">{order.price} zł</span>
            {order.payment_status ?<span className="order-payment-status-span" style={{color: order.payment_status ? '#009E60' : 'red'}}>Potwierdzona</span> : 
            <span className="order-payment-status-span" style={{color: order.payment_status ? '#009E60' : 'red'}}>Niepotwierdzona</span>}
            <span className="order-date-span">{formatedDate}</span>
        </>
    );

}

export default OrderView