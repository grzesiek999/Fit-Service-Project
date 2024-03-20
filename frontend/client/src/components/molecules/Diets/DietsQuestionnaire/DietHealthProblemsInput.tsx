import React from "react";


type DietHealthProblemsInputProps = {
    setHealthProblems: (param:string) => void;
}

const DietHealthProblemsInput = ({setHealthProblems}: DietHealthProblemsInputProps) => {

    const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        event.currentTarget.placeholder = '';
    };
        
    const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        event.currentTarget.placeholder = "Opisz jakie masz problemy abyśmy mogli wziąć to pod uwagę podczas tworzenia planu dietetyczne dla ciebie.";
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newMessage = event.target.value;
        setHealthProblems(newMessage);
    }

    return(
        <div className="health-problems-input-div-wrapper">
            <span className="diet-questionnaire-span">4. Jeśli jesteś masz jakieś schorzenia lub chorójesz na coś, wpisz tę informację dla nas:</span>
            <textarea
                name="healthProblems"
                className= "textarea-input"
                rows={10}
                cols={30}
                placeholder="Opisz jakie masz problemy abyśmy mogli wziąć to pod uwagę podczas tworzenia planu dietetyczne dla ciebie."
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                style={{ resize: 'vertical' }}
            />
        </div>
    );
}

export default DietHealthProblemsInput;