import React, {useState} from "react";
import '../../../styles/index.scss';

const BirthdayRegisterInput = ({ onBirthdayChange }: {onBirthdayChange: (newBirthday: string) =>void}) => {
  const [birthday, setBirthday] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBirthday = event.target.value;
    setBirthday(newBirthday);
    onBirthdayChange(newBirthday);
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

export default BirthdayRegisterInput;