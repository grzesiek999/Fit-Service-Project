import React from "react";


type AddParameterInputProps = {
    inputType: string;
    value: number | null;
    className: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddParameterInput = ({inputType, value, className, onChange }: AddParameterInputProps) => {

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
                className={className}
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
                className={className}
                placeholder="0"
                value={value === null ? '' : value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                onChange={onChange}
            />
        );
    }
    else if(inputType === 'physic_activity'){
        return (
            <div className="physic-activity-input-div-wrapper">
                <div>
                    <input 
                        type="radio"
                        id="none"
                        name="physActv"
                        value={1}
                        checked={value === 1}
                        onChange={onChange}
                        required
                    /><label>praca siedząca, aktywność fizyczna na niskim poziomie</label>
                </div>    
                <div> 
                    <input 
                        type="radio"
                        id="small"
                        name="physActv"
                        value={2}
                        checked={value === 2}
                        onChange={onChange}
                        required
                    /><label>praca niefizyczna, trening 2 razy w tygodniu</label>
                </div>
                <div>  
                    <input 
                        type="radio"
                        id="middle"
                        name="physActv"
                        value={3}
                        checked={value === 3}
                        onChange={onChange}
                        required
                    /><label>lekka praca fizyczna, trening 3–4 razy w tygodniu</label>
                </div>
                <div>  
                    <input 
                        type="radio"
                        id="Huge"
                        name="physActv"
                        value={4}
                        checked={value === 4}
                        onChange={onChange}
                        required
                    /><label>praca fizyczna, trening 5 razy w tygodniu</label>
                </div>
                <div>  
                    <input 
                        type="radio"
                        id="EveryDay"
                        name="physActv"
                        value={5}
                        checked={value === 5}
                        onChange={onChange}
                        required
                    /><label>ciężka praca fizyczna, codzienny trening</label>
                </div> 
            </div>
        );
    }
    else { return null; }
}

export default AddParameterInput;