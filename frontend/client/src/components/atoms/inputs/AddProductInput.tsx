import React, {useState} from "react";


type AddProductTextInputProps = {
    inputType: string;
    onChange: (newValue: string) => void;
}

const AddProductTextInput = ({inputType, onChange}: AddProductTextInputProps) => {

    const [name, setName] = useState<string>('');
    
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = '';
    };
          
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = 'Nazwa produktu';
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;
        setName(newName);
        onChange(newName);
    }

    return (
        <input 
            type='text' 
            className='add-product-name-input-wrapper' 
            placeholder="Nazwa produtku" 
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            onChange={handleChange}
        />
    );
}


type AddProductNumberInputProps = {
    inputType: string;
    onChange: (newValue: number) => void;
}

const AddProductNumberInput = ({inputType, onChange}: AddProductNumberInputProps) => {

    const [energy, setEnergy] = useState<number>(0);
    const [proteins, setProteins] = useState<number>(0);
    const [carbohydrates, setCarbohydrates] = useState<number>(0);
    const [fats, setFats] = useState<number>(0);

    if(inputType==='energy'){

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newEnergyString = event.target.value;
            const newEnergy = parseFloat(newEnergyString);
            setEnergy(newEnergy);
            onChange(newEnergy);
        }

        const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
            event.currentTarget.placeholder = '';
        };
            
        const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            event.currentTarget.placeholder = '0';
        };
        
        return(
            <input 
                type='number' 
                className='add-product-number-input-wrapper'
                placeholder="0"
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                onChange={handleChange}
            />
        );
    }
    else if(inputType==='proteins'){

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newProteinsString = event.target.value;
            const newProteins = parseFloat(newProteinsString);
            setProteins(newProteins);
            onChange(newProteins);
        }

        const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
            event.currentTarget.placeholder = '';
        };
            
        const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            event.currentTarget.placeholder = '0';
        };
        
        return(
            <input 
                type='number'
                step={0.1} 
                className='add-product-number-input-wrapper'
                placeholder="0"
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                onChange={handleChange}
            />
        );
    }
    else if(inputType==='carbohydrates'){

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newCarbohydratesString = event.target.value;
            const newCarbohydrates = parseFloat(newCarbohydratesString);
            setCarbohydrates(newCarbohydrates);
            onChange(newCarbohydrates);
        }

        const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
            event.currentTarget.placeholder = '';
        };
            
        const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            event.currentTarget.placeholder = '0';
        };
        
        return(
            <input 
                type='number'
                step={0.1} 
                className='add-product-number-input-wrapper'
                placeholder="0"
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                onChange={handleChange}
            />
        );
    }
    else if(inputType==='fats'){

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newFatsString = event.target.value;
            const newFats = parseFloat(newFatsString);
            setFats(newFats);
            onChange(newFats);
        }

        const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
            event.currentTarget.placeholder = '';
        };
            
        const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            event.currentTarget.placeholder = '0';
        };
        
        return(
            <input 
                type='number'
                step={0.1} 
                className='add-product-number-input-wrapper'
                placeholder="0"
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                onChange={handleChange}
            />
        );
    }
    else {
        return null;
    }
}

export {AddProductTextInput, AddProductNumberInput};