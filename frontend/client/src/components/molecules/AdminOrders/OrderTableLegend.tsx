import React from "react";


const OrderTableLagend = () => {

    return (
        <div className="orders-legend-div-wrapper">
            <span className="orderid-span">Nr.</span>
            <span className="user-full-name-span">Zamawiający</span>
            <span className="order-price-span">Kwota</span>
            <span className="order-payment-status-span">Status płatności</span>
            <span className="order-date-span">Data</span>
        </div>
    );
}

export default OrderTableLagend;