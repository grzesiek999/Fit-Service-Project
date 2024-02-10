import React, {SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/buttons/Button';
import SignInInput from '../../atoms/inputs/SignInInput';
import SignInLabel from '../../atoms/labels/SignInLabel';


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
    <div className='register-form-div-wrapper'>
      <form onSubmit={submit}>
        <h6>Utwórz Konto</h6>
        <SignInLabel context='Podaj swoje imię:'/>
        <SignInInput inputType="name" className='signin-input' onChange={handleName} />
        <SignInLabel context='Podaj swoje nazwisko:'/>
        <SignInInput inputType="surname" className='signin-input' onChange={handleSurname} />
        <SignInLabel context='Wybierz swoją date urodzenia:'/>
        <SignInInput inputType="birthday" className='signin-input' onChange={handleBirthday} />
        <SignInLabel context='Podaj adres email:'/>
        <SignInInput inputType="email" className='signin-input' onChange={handleEmail} />
        <SignInLabel context='Podaj hasło:'/>
        <SignInInput inputType="password" className='signin-input' onChange={handlePassword} />
        <SignInLabel context='Powtórz hasło:'/>
        <SignInInput inputType="password" className='signin-input' onChange={handleConfirmPassword} />
        {message && <div className='error-message-div-wrapper'>{message}</div>}
        <div className='register-check-div-wrapper'>
          <SignInInput inputType='check' className='checkbox-register-input' onChange={()=>{}} />
          <label className='register-check-form-label-wrapper'>Akceptuję regulamin</label>
        </div>
        <Button buttonType='submit' className='create-account-button-wrapper' onClick={()=>{}} buttonTittle='Utwórz' />
      </form>
    </div>
  );
}

export default RegisterForm;