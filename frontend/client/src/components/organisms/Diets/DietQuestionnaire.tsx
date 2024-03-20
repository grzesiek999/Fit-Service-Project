import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SESSION } from "../../../constant/Session";
import { getUserWithExpiry } from "../../../utils/LocalStorageManagment";
import AddParametersForm from "../UserPanel/MyProfil/AddParametersForm";
import DietQuestionnaireForm from "../../molecules/Diets/DietsQuestionnaire/DietQuestionnaireForm";


const DietQuestionnaire = () =>{

    const user_id = getUserWithExpiry(SESSION.USER).id;
    const [areParamters, setAreParameters] = useState<Boolean>(true);
    const {diet_type} = useParams();


    const fetchParameters = async () => {
        const url = `http://localhost:8000/api/parameters/last_users_parameters?user_id=${user_id}`
        const response =  await fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok) {
            const content = await response.json();
            if(content.message === 'user dont have any parameters') { setAreParameters(false); }
            else { return setAreParameters(true); }
        }
    }


    useEffect(() => {
        fetchParameters();
    }, []);


    return (
        <div className="diet-questionnaire-organism-div-wrapper">
            {areParamters ? <DietQuestionnaireForm diet_type={diet_type} /> :<AddParametersForm fromDiets={true} />}
        </div>
    );
}


export default DietQuestionnaire;