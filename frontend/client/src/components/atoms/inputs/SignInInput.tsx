import React, {useState} from "react";


type SignInInputProps = {
    inputType: string;
    onChange: (newValue: string) => void;
}

const SignInInput = ({inputType, onChange}: SignInInputProps) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [birthday, setBirthday] = useState('');
    
    if(inputType==='password') {
  
        const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
          event.currentTarget.placeholder = '';
        };
          
        const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
          event.currentTarget.placeholder = 'hasło';
        };

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newPassword = event.target.value;
            setPassword(newPassword);
            onChange(newPassword);
        }

        return (
            <input 
                type='password' 
                className='password-register-input' 
                placeholder="hasło" 
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                onChange={handleChange}
            />
        );
    }
    else if(inputType==='email'){

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newEmail = event.target.value;
            setEmail(newEmail);
            onChange(newEmail);
        }

        const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
            event.currentTarget.placeholder = '';
        };
    
        const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            event.currentTarget.placeholder = 'email@gmail.com';
        };

        return(
            <input 
                type='email' 
                className='email-register-input' 
                placeholder="email@gmail.com" 
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                onChange={handleChange}
            />
        );
    }
    else if(inputType==='name'){

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newName = event.target.value;
            setName(newName);
            onChange(newName);
        }
        
        const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
            event.currentTarget.placeholder = '';
        };
            
        const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            event.currentTarget.placeholder = 'Imię';
        };
        
        return(
            <input 
                type='text' 
                className='name-register-input' 
                placeholder="Imię" 
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                onChange={handleChange}
            />
        );
    }
    else if(inputType==='surname'){

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newSurname = event.target.value;
            setSurname(newSurname);
            onChange(newSurname);
        }
        
        const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
            event.currentTarget.placeholder = '';
        };
            
        const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            event.currentTarget.placeholder = 'Nazwisko';
        };
        
        return(
            <input 
                type='text' 
                className='surname-register-input' 
                placeholder="Nazwisko" 
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                onChange={handleChange}
            />
        );
    }
    else if(inputType==='birthday'){
    
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newBirthday = event.target.value;
            setBirthday(newBirthday);
            onChange(newBirthday);
        }
        
        return(
            <input 
                type='date' 
                className='birthday-register-input' 
                required
                onChange={handleChange}
            />
        );
    }
    else if(inputType==='check'){

        return(
            <input 
                type='checkbox' 
                className='checkbox-register-input' 
                required
            />
        );
    }
    else {
        return null;
    }
}

export default SignInInput;