import React from "react";


type DietAlergiesInputProps = {
    setAlergies: (param:string) => void;
}

const DietAlergiesInput = ({setAlergies}: DietAlergiesInputProps) => {

    const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        event.currentTarget.placeholder = '';
    };
        
    const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        event.currentTarget.placeholder = "Podaj na jakie produkty lub składniki jesteś uczulony, abysmy mogli uwzględnić to w diecie ...";
    };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newMessage = event.target.value;
        setAlergies(newMessage);
    }

    return(
        <div className="alergies-input-div-wrapper">
            <span className="diet-questionnaire-span">3. Jeśli jesteś na coś uczulony, wpisz tę informację dla nas:</span>
            <textarea
                name="alergies"
                className= "textarea-input"
                rows={10}
                cols={30}
                placeholder="Podaj na jakie produkty lub składniki jesteś uczulony, abysmy mogli uwzględnić to w diecie ..."
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                style={{ resize: 'vertical' }}
            />
        </div>
    );
}

export default DietAlergiesInput;