import React from "react";
import "../../styles/index.scss";
import AdminDietPlanOrganism from "../organisms/AdminDietPlan/AdminDietPlanOrganism";


const AdminDietPlanPageTemplate = () => {

    return (
        <div className="admin-create-diet-plan-page-template-div-wrapper">
            <AdminDietPlanOrganism />
        </div>
    );
}

export default AdminDietPlanPageTemplate;