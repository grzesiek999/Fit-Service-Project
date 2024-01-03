import React from "react";


type AddParameterInputProps = {
    inputType: string;
    value: number | null;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddParameterInput = ({inputType, value, onChange }: AddParameterInputProps) => {

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = '';
    };
        
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = '0';
    };

    if(inputType === 'int'){
        return(
            <input 
                type='number' 
                className='add-parameters-number-input-wrapper'
                placeholder="0"
                value={value === null ? '' : value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                onChange={onChange}
            />
        );
    }
    else if(inputType === 'float'){
        return(
            <input 
                type='number'
                step={0.1} 
                className='add-parameters-number-input-wrapper'
                placeholder="0"
                value={value === null ? '' : value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                onChange={onChange}
            />
        );
    }
    else if(inputType === 'sex'){
        return (
            <div>
                <input 
                    type="radio"
                    id="women"
                    name="sex"
                    value={2}
                    checked={value === 2}
                    onChange={onChange}
                /><label>Kobieta</label>
                <input 
                    type="radio"
                    id="man"
                    name="sex"
                    value={1}
                    checked={value === 1}
                    onChange={onChange}
                /><label>Męzczyzna</label>
              <input 
                    type="radio"
                    id="not_defined"
                    name="sex"
                    value={0}
                    checked={value === 0}
                    onChange={onChange}
                /><label>Nie chce podawać</label>
            </div>
        );
    }
    else { return null; }
}

export default AddParameterInput;