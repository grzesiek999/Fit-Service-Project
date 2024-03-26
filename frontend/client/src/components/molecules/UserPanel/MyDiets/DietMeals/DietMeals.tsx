import React from "react";


type DietMealsProps = {
    diet_id: undefined | number;
}

const DietMeals = ({diet_id}: DietMealsProps) => {

    return (
        <div className="diet-meals-div-wrapper">
            <span className="our-meals-proposition-span">Nasz proponowany jadłospis</span>
            <div className="example-meals-div-wrapper">
                
            </div>
        </div>
    );
}

export default DietMeals;