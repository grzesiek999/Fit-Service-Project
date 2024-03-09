import React from "react";


type BmrResultsProps = {
    bmr: number | null;
    demand: number | null;
}

const BmrResults = ({bmr, demand}: BmrResultsProps) => {


    return (
        <div className="bmr-results-div-wrapper">
            <span className="bmr-title-span">Twoja podstawowa przemiana materii wynosi:</span>
            <div><span className="bmr-results-span">{bmr?.toFixed(0)}</span><span className="bmr-kcal-span">kcal</span></div>
            <span className="bmr-title-span">Aby utrzymać swoją wage powinieneś spozywać*:</span>
            <div><span className="bmr-results-span">{demand?.toFixed(0)}</span><span className="bmr-kcal-span">kcal</span></div>
            <p>*Są to orientacyjne wyliczenia, które mogą różnić się u poszczególnych osób ze względu na indywidualne cechy i parametry dodatkowe.</p>
        </div>
    );
}

export default BmrResults;