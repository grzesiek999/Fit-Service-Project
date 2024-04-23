import React from "react";
import AdminOrdersQuene from "./AdminOrdersQuene";
import AdminOrdersHistory from "./AdminOrdersHistory";


const AdminOrdersOrganism = () => {

    return (
        <div className="admin-orders-organism-div-wrapper">
            <h5>Zarządzanie zamówieniami</h5>
            <AdminOrdersQuene />
            <AdminOrdersHistory />
        </div>
    )
}

export default AdminOrdersOrganism;