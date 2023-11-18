import React from "react";


type AddProductTextInputProps = {
    vlaue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddProductTextInput = ({vlaue, onChange}: AddProductTextInputProps) => {
    
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = '';
    };
          
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = 'Nazwa produktu';
    };

    return (
        <input 
            type='text' 
            className='add-product-name-input-wrapper' 
            placeholder="Nazwa produtku"
            value={vlaue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            onChange={onChange}
        /> 
    );
}


type AddProductNumberInputProps = {
    inputType: string;
    value: number | null;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddProductNumberInput = ({inputType, value, onChange}: AddProductNumberInputProps) => {

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = '';
    };
        
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = '0';
    };

    if(inputType==='energy'){
        return(
            <input 
                type='number' 
                className='add-product-number-input-wrapper'
                placeholder="0"
                value={value === null ? '' : value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                onChange={onChange}
            />
        );
    }
    else if(inputType==='proteins'){
        return(
            <input 
                type='number'
                step={0.1} 
                className='add-product-number-input-wrapper'
                placeholder="0"
                value={value === null ? '' : value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                onChange={onChange}
            />
        );
    }
    else if(inputType==='carbohydrates'){
        return(
            <input 
                type='number'
                step={0.1} 
                className='add-product-number-input-wrapper'
                placeholder="0"
                value={value === null ? '' : value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                onChange={onChange}
            />
        );
    }
    else if(inputType==='fats'){
        return(
            <input 
                type='number'
                step={0.1} 
                className='add-product-number-input-wrapper'
                placeholder="0"
                value={value === null ? '' : value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                onChange={onChange}
            />
        );
    }
    else {
        return null;
    }
}

export {AddProductTextInput, AddProductNumberInput};