import React, {SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateAccountButton from '../atoms/buttons/CreateAccountButton';
import PasswordRegisterInput from '../atoms/inputs/PasswordRegisterInput';
import EmailRegisterInput from '../atoms/inputs/EmailRegisterInput';
import NameRegisterInput from '../atoms/inputs/NameRegisterInput';
import SurnameRegisterInput from '../atoms/inputs/SurnameRegisterInput';
import BirthdayRegisterInput from '../atoms/inputs/BirthdayRegisterInput';
import '../../styles/index.scss';


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
      return setMessage('Passwords do not match');
    }
  }

  return (
      <div className='register-form-wrapper'>
        <form onSubmit={submit}>
          <NameRegisterInput onNameChange={handleName} />
          <SurnameRegisterInput onSurnameChange={handleSurname} />
          <BirthdayRegisterInput onBirthdayChange={handleBirthday} />
          <EmailRegisterInput onEmailChange={handleEmail} />
          <PasswordRegisterInput onPasswordChange={handlePassword} />
          <PasswordRegisterInput onPasswordChange={handleConfirmPassword} />
          <CreateAccountButton />
        </form>
        {message && <div>{message}</div>}
      </div>
  );
}

export default RegisterForm;