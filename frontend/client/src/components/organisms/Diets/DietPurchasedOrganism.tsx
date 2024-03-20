import React from "react";
import DietPurchasedInformation from "../../molecules/Diets/DietPurchased/DietPurchasedInformation";
import DietPurchasedStatus from "../../molecules/Diets/DietPurchased/DietPurchasedStatus";


const DietPurchasedOrganism =()=>{

    return(
        <div className="diet-purchased-organism-div-wrapper">
            <DietPurchasedInformation />
            <DietPurchasedStatus />
        </div>
    )
}

export default DietPurchasedOrganism;