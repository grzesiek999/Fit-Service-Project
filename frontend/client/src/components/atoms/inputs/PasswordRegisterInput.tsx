import React, {useState} from "react";
import '../../../styles/index.scss';

const PasswordRegisterInput = ({ onPasswordChange }: {onPasswordChange: (newPassword: string) =>void}) => {
  const [password, setPassword] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    onPasswordChange(newPassword);
  }

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.currentTarget.placeholder = '';
  };
    
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    event.currentTarget.placeholder = 'hasło';
  };

  return(
    <input 
      type='password' 
      className='password-register-input' 
      placeholder="hasło" 
      onFocus={handleFocus}
      onBlur={handleBlur}
      required
      onChange={handleChange}
    />
  )
}

export default PasswordRegisterInput;