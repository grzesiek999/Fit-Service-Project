import React from "react";


type CreateDietsInputsProps = {
    inputType: string;
    value: number | null;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CreateDietsInputs =({inputType, value, onChange}: CreateDietsInputsProps) =>{

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = '';
    };
        
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = '0';
    };

    if (inputType === 'proteins') {
        return (
            <div className="create-diet-number-input-div-wrapper">
                <label>Białko:</label>
                <input 
                    type='number'
                    step={1} 
                    className='create-diet-input'
                    placeholder="0"
                    value={value === null ? '' : value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    onChange={onChange}
                />
                <label>g.</label>
            </div>
        );
    }
    else if (inputType === 'carbohydrates') {
        return (
            <div className="create-diet-number-input-div-wrapper">
                <label>Węglowodany:</label>
                <input 
                    type='number'
                    step={1} 
                    className='create-diet-input'
                    placeholder="0"
                    value={value === null ? '' : value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    onChange={onChange}
                />
                <label>g.</label>
            </div>
        );
    }
    else if (inputType === 'fats') {
        return (
            <div className="create-diet-number-input-div-wrapper">
                <label>Tłuszcze:</label>
                <input 
                    type='number'
                    step={1} 
                    className='create-diet-input'
                    placeholder="0"
                    value={value === null ? '' : value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    onChange={onChange}
                />
                <label>g.</label>
            </div>
        );
    }
    else if (inputType === 'fiber') {
        return (
            <div className="create-diet-number-input-div-wrapper">
                <label>Błonnik:</label>
                <input 
                    type='number'
                    step={1} 
                    className='create-diet-input'
                    placeholder="0"
                    value={value === null ? '' : value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    onChange={onChange}
                />
                <label>g.</label>
            </div>
        );
    }
    else if (inputType === 'fluids') {
        return (
            <div className="create-diet-number-input-div-wrapper">
                <label>Woda:</label>
                <input 
                    type='number'
                    step={250} 
                    className='create-diet-input'
                    placeholder="0"
                    value={value === null ? '' : value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    onChange={onChange}
                />
                <label>ml.</label>
            </div>
        );
    }
    else return null;
}

export default CreateDietsInputs;