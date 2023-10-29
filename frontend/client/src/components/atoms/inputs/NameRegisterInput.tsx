import React, {useState} from "react";
import '../../../styles/index.scss';

const NameRegisterInput = ({ onNameChange }: {onNameChange: (newName: string) =>void}) => {
  const [name, setName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);
    onNameChange(newName);
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
  )
}

export default NameRegisterInput;