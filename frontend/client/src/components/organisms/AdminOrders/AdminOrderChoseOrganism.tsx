import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderDetailsDiv from "../../molecules/AdminOrders/OrderDetailsDiv";
import ClientDetailsDiv from "../../molecules/AdminOrders/ClientDetailsDiv";

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


const AdminOrderChoseOrganism = () => {

    const {order_id} = useParams();
    const [order, setOrder] = useState<Order>();


    const fetchOrder = async () => {
        const response = await fetch(`http://localhost:8000/api/orders/getby_orderid?order_id=${order_id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            const content = await response.json();
            setOrder(content);
        }
        else { console.log(response.statusText, response.status); }
    }

    useEffect (()=>{
        fetchOrder();
    }, [order_id])



    return (
        <div className="admin-order-chose-organism-div-wrapper">
            <span className="orderid-title-span">Numer zamówienia: {order_id}</span>
            <OrderDetailsDiv order={order} />
            <ClientDetailsDiv user_id={order?.user_id}/>
        </div>
    );
}

export default AdminOrderChoseOrganism;