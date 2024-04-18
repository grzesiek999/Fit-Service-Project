import React from "react";
import "../../styles/index.scss";
import AdminOrdersOrganism from "../organisms/AdminOrders/AdminOrdersOrganism";


const AdminOrdersPageTemplate =() => {

    return (
        <div className="admin-orders-page-template-div-wrapper">
            <AdminOrdersOrganism />
        </div>
    );
}

export default AdminOrdersPageTemplate;