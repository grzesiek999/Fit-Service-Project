import { useEffect, useState } from "react";
import OrderView from "../../molecules/AdminOrders/OrderView";
import OrderTableLagend from "../../molecules/AdminOrders/OrderTableLegend";
import { Link } from "react-router-dom";

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

const AdminOrdersQuene = () => {

    const [orders, setOrders] = useState<Order[]>([]);

    const fetchOrders = async () => {
        const response = await fetch('http://localhost:8000/api/orders/get_to_make', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            const content = await response.json();
            setOrders(content);
        }
        else { console.log(response.statusText, response.status); }
    }

    useEffect (()=>{
        fetchOrders();
    }, [])

    return (
        <div className="admin-orders-quene-div-wrapper">
            <div className="temp-admin-orders-quene-div-wrapper">
                <span className="new-orders-span">Nowe zamówienia:</span>
                <OrderTableLagend />
                <div className="orders-with-options-div-wrapper">
                    <div className="new-orders-list-part-div-wrapper">
                        {orders.map((order: Order) => (
                            <div key={order.id} className="order-view-div-wrapper"><OrderView order={order}/></div>
                        ))}
                    </div>
                    <div className="orders-options-div-wrapper">
                    {orders.map((order: Order) => (
                            <div key={order.id} className="order-view-div-wrapper"><Link to={`/admin/orders/${order.id}`} className="order-details-button-link" onClick={()=>{document.body.scrollIntoView({ behavior: "smooth", block: "start" });}}>Szczegóły &#10148;</Link></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminOrdersQuene;