import React, {useState} from "react";
import '../../../styles/index.scss';

const EmailRegisterInput = ({ onEmailChange }: {onEmailChange: (newEmail: string) =>void}) => {
  const [email, setEmail] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    onEmailChange(newEmail);
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
  )
}

export default EmailRegisterInput;