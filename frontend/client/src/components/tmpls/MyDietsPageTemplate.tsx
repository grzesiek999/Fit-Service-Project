import React from "react";
import "../../styles/index.scss";
import MyDietsOrganism from "../organisms/UserPanel/MyDiets/MyDietsOrganism";

const MyDietsPageTemplate = () => {

    return(
        <div className="my-diets-page-template-div-wrapper">
            <MyDietsOrganism />
        </div>
    );
}

export default MyDietsPageTemplate;