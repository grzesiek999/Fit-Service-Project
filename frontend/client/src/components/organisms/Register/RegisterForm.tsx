import React, {SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/buttons/Button';
import '../../../styles/index.scss';
import SignInInput from '../../atoms/inputs/SignInInput';


const RegisterForm = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleName = (name :string) => {
    setName(name);
  };

  const handleSurname = (surname :string) => {
    setSurname(surname);
  };

  const handleBirthday = (birthday :string) => {
    setBirthday(birthday);
  };

  const handleEmail = (email :string) => {
    setEmail(email);
  };
  
  const handlePassword = (password :string) => {
    setPassword(password);
  };

  const handleConfirmPassword = (password :string) => {
    setConfirmPassword(password);
  };

  const submit = async (e: SyntheticEvent) =>{
    e.preventDefault();
    if(password === confirmPassword) {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email,
          password,
          name,
          surname,
          birthday
        })
      })
      if(response.ok){
        return navigate('/register_successful');
      }
      else{
        console.error('Error', response.status, response.statusText);
        return setMessage('Error');
      }
    }
    else {
      return setMessage('Podane hasła nie są takie same');
    }
  }

  return (
    <div className='register-form-wrapper'>
      <form onSubmit={submit}>
        <SignInInput inputType="name" onChange={handleName} />
        <SignInInput inputType="surname" onChange={handleSurname} />
        <SignInInput inputType="birthday" onChange={handleBirthday} />
        <SignInInput inputType="email" onChange={handleEmail} />
        <SignInInput inputType="password" onChange={handlePassword} />
        <SignInInput inputType="password" onChange={handleConfirmPassword} />
        <Button buttonType='submit' className='create-account-button-wrapper' onClick={()=>{}} buttonTittle='Stwórz Konto' />
      </form>
      {message && <div>{message}</div>}
    </div>
  );
}

export default RegisterForm;