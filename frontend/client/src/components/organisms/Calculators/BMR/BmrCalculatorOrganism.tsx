import React, { useState } from "react";
import BmrCalculator from "../../../molecules/Calculators/BMR/BmrCalculator";
import BmrInformator from "../../../molecules/Calculators/BMR/BmrInformator";
import BmrResults from "../../../molecules/Calculators/BMR/BmrResults";


const BmrCalculatorOrganism = () => {
    
    const [bmr, setBmr] = useState<number | null>(null);
    const [demand, setDemand] = useState<number | null>(null);

    return (
        <div className="bmr-calculator-orgnism-div-wrapper">
            <h5>Oblicz swóje zapotrzebowanie kaloryczne (BMI)</h5>
            <BmrCalculator setBmr={setBmr} setDemand={setDemand} />
            {bmr ? <BmrResults bmr={bmr} demand={demand} /> : null}
            <BmrInformator />
        </div>
    );
}

export default BmrCalculatorOrganism;