import React from "react";


type AddMealInputProps = {
    inputType: string;
    value: string | null;
    weightValue: number | null;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeMeal: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onChangeDesc: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const AddMealInput = ({inputType, value, weightValue, onChange, onChangeMeal, onChangeDesc}: AddMealInputProps) => {

    const handleFocusName = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = '';
    };
        
    const handleBlurName = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = 'Nazwa posiłku...';
    };

    const handleFocusDesc = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        event.currentTarget.placeholder = '';
    };
        
    const handleBlurDesc = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        event.currentTarget.placeholder = 'Opisz jak przygotować posiłek...';
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = '';
    };
        
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = '0';
    };

    
    if(inputType === 'meal'){
        return (
            <div className="meal-select-input-div-wrapper">
                <span>Wybierz numer posiłku użytkownika w ciągu dnia:</span>
                <select name="meals" id="meal" onChange={onChangeMeal}>
                    <option value={0}>wybierz posiłek</option>
                    <option value={1}>pierwszy posiłek</option>
                    <option value={2}>drugi posiłek</option>
                    <option value={3}>trzeci posiłek</option>
                    <option value={4}>czwarty posiłek</option>
                    <option value={5}>piąty posiłek</option>
                    <option value={6}>szósty posiłek</option>
                </select>    
            </div>
        );
    }
    else if(inputType === 'name'){
        return (
            <div className="meal-name-input-div-wrapper">
                <label>Podaj nazwę posiłku:</label>
                <input 
                    type='text'
                    className=''
                    placeholder="Nazwa posiłku ..."
                    onFocus={handleFocusName}
                    onBlur={handleBlurName}
                    required
                    onChange={onChange}
                />            
            </div>
        );
    }
    else if(inputType === 'describe'){
        return (
            <div className="meal-describe-input-div-wrapper">
                <label>Przepis, sposób przygotowania posiłku, uwagi:</label>
                <textarea
                    name="describe"
                    className=''
                    rows={10}
                    cols={30}
                    required
                    placeholder="Opisz jak przygotować posiłek..."
                    onFocus={handleFocusDesc}
                    onBlur={handleBlurDesc}
                    onChange={onChangeDesc}
                    style={{ resize: 'vertical' }}
                />  
            </div>
        );      
    }
    else if(inputType === 'weight'){
        return (
            <div className="meal-weight-input-div-wrapper">
                <label>Waga:</label>
                <input 
                    type='number'
                    step={1} 
                    className=''
                    placeholder="0"
                    value={weightValue === null ? '' : weightValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    onChange={onChange}
                />
                <label>g.</label>  
            </div>
        );      
    }
    else return null;
}

export default AddMealInput;