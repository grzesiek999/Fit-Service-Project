import React from "react";
import "../../styles/index.scss";
import AdminDietsOrganism from "../organisms/AdminDiets/AdminDietsOrganism";


const AdminDietsPageTemplate = () => {

    return (
        <div className="admin-diets-page-template-div-wrapper">
            <AdminDietsOrganism />
        </div>
    );
}

export default AdminDietsPageTemplate;