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
                    required
                /><label>Kobieta</label>
                <input 
                    type="radio"
                    id="man"
                    name="sex"
                    value={1}
                    checked={value === 1}
                    onChange={onChange}
                    required
                /><label>Męzczyzna</label>
              <input 
                    type="radio"
                    id="not_defined"
                    name="sex"
                    value={0}
                    checked={value === 0}
                    onChange={onChange}
                    required
                /><label>Nie chce podawać</label>
            </div>
        );
    }
    else if(inputType === 'physic_activity'){
        return (
            <div>
                <input 
                    type="radio"
                    id="none"
                    name="physActv"
                    value={1}
                    checked={value === 1}
                    onChange={onChange}
                    required
                /><label>Brak aktywnosci fizycznej</label>
                <input 
                    type="radio"
                    id="small"
                    name="physActv"
                    value={2}
                    checked={value === 2}
                    onChange={onChange}
                    required
                /><label>Mała aktywnosc fizyczna</label>
              <input 
                    type="radio"
                    id="middle"
                    name="physActv"
                    value={3}
                    checked={value === 3}
                    onChange={onChange}
                    required
                /><label>Umiarkowana aktywnosc fizyczna</label>
              <input 
                    type="radio"
                    id="Huge"
                    name="physActv"
                    value={4}
                    checked={value === 4}
                    onChange={onChange}
                    required
                /><label>Duza aktywnosc fizyczna</label>
              <input 
                    type="radio"
                    id="EveryDay"
                    name="physActv"
                    value={5}
                    checked={value === 5}
                    onChange={onChange}
                    required
                /><label>Codzienna aktywnosc fizyczna</label>
            </div>
        );
    }
    else { return null; }
}

export default AddParameterInput;