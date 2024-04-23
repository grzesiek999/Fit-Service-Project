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
        <div className="product-name-details-input-div">
            <label>Podaj nazwę produktu: </label>
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
        </div> 
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
            <div className="product-macro-details-input-div">
                <label>Podaj wartość energetyczną produktu w 100g:</label>
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
            </div>
        );
    }
    else if(inputType==='proteins'){
        return(
            <div className="product-macro-details-input-div">
                <label>Podaj ilość białka w 100g produktu: </label>
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
            </div>
        );
    }
    else if(inputType==='carbohydrates'){
        return(
            <div className="product-macro-details-input-div">
                <label>Podaj ilość węglowodanów w 100g produktu: </label>
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
            </div>
        );
    }
    else if(inputType==='fats'){
        return(
            <div className="product-macro-details-input-div">
                <label>Podaj ilość tłuszczy w 100g produktu: </label>
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
            </div>
        );
    }
    else if(inputType==='fiber'){
        return(
            <div className="product-macro-details-input-div">
                <label>Podaj ilość błonnika w 100g produktu: </label>
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
            </div>
        );
    }
    else {
        return null;
    }
}

export {AddProductTextInput, AddProductNumberInput};