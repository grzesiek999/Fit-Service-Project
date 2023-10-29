import React, {useState} from "react";
import '../../../styles/index.scss';

const SurnameRegisterInput = ({ onSurnameChange }: {onSurnameChange: (newSurname: string) =>void}) => {
  const [surname, setSurname] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSurname = event.target.value;
    setSurname(newSurname);
    onSurnameChange(newSurname);
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
  )
}

export default SurnameRegisterInput;