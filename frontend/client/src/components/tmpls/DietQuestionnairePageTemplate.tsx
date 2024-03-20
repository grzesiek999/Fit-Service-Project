import React from "react";
import "../../styles/index.scss";
import DietQuestionnaire from "../organisms/Diets/DietQuestionnaire";


const DietQuestionnairePageTemplate = () => {

    return (
        <div className="diet-questionnaire-page-template-div-wrapper">
            <DietQuestionnaire />
        </div>
    );
}

export default DietQuestionnairePageTemplate;