import React from "react";


type DietEatingInputProps = {
    setEating: (param:string) => void;
}

const DietEatingInput = ({setEating}: DietEatingInputProps) => {

    const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        event.currentTarget.placeholder = '';
    };
        
    const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        event.currentTarget.placeholder = "Opisz jakie produkty lubisz, a jakich nie, na podstawie tego stworzymy spersonalizowaną diete dla ciebie ...";
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newMessage = event.target.value;
        setEating(newMessage);
    }

    return(
        <div className="eating-input-div-wrapper">
            <span className="diet-questionnaire-span">2. Napisz co jesz na codzień:</span>
            <textarea
                name="eating"
                className= "textarea-input"
                rows={10}
                cols={30}
                required
                placeholder="Opisz jakie produkty lubisz, a jakich nie, na podstawie tego stworzymy spersonalizowaną diete dla ciebie ..."
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                style={{ resize: 'vertical' }}
            />
        </div>
    );
}

export default DietEatingInput;