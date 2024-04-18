import React, { useEffect, useState } from "react";
import { getUserWithExpiry } from "../../../../utils/LocalStorageManagment";
import { SESSION } from "../../../../constant/Session";
import DietMacroDetails from "./DietDetails/DietMacroDetails";
import DietFluids from "./DietDetails/DietFluids";
import DietMeals from "./DietMeals/DietMeals";


interface Diet {
    id: number,
    describe: string,
    kcal: number,
    proteins: number,
    carbohydrates: number,
    fats: number,
    fiber: number,
    fluids:number,
}

type MyDietPlanProps = {
    isLastDay: boolean;
}

const MyDietPlan = ({isLastDay}: MyDietPlanProps ) => {

    const user_id = getUserWithExpiry(SESSION.USER).id;
    const [diet, setDiet] = useState<Diet | null>(null);

    const fetchDiet = async () => {
        const response = await fetch(`http://localhost:8000/api/diets/get?user_id=${user_id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            const content = await response.json()
            setDiet(content);
        }
        else {console.log(response.status, response.statusText);}
    }


    useEffect (()=>{
        fetchDiet();
    }, []);


    return (
        <div className="my-diet-plan-div-wrapper">
            {isLastDay?<span className="islastday-diet-span">Uwaga ! Jutro twój plan dietetyczny wygasa, przejdź do zakładki diety aby wykupić nowy plan.</span>:null}
            <span className="diet-plan-title-span">Plan Dietetyczny</span>
            <p className="diet-describe-paragraf">{diet?.describe}</p>
            <div className="diet-details-div-wrapper">
                <DietMacroDetails diet={diet} />
                <DietFluids fluids={diet?.fluids} />
            </div>
            <DietMeals diet_id={diet?.id}/>
        </div>
    );
}

export default MyDietPlan;