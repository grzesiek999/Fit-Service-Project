import React, {SyntheticEvent, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import LoginFormLinks from '../../molecules/Login/LoginFormLinks';
import Button from '../../atoms/buttons/Button';
import SignInInput from '../../atoms/inputs/SignInInput';
import { UserAuth } from '../../../context/UserDataContext';
import {setUserWithExpiry} from '../../../utils/LocalStorageManagment';
import { SESSION } from '../../../constant/Session';
import { ROUTER_PATH } from '../../../router/RouterPath';
import SignInLabel from '../../atoms/labels/SignInLabel';


const LoginForm = () => {

  const {sigIn} = useContext(UserAuth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleEmail = (email :string) => {
    setEmail(email);
  };
  
  const handlePassword = (password :string) => {
    setPassword(password);
  };

  const fetchUser = async () =>{
    const response = await fetch('http://localhost:8000/api/user', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    });
    
    const content = await response.json();
    if(content.detail === 'Unauthenticated!'){}
    else{
      sigIn(setUserWithExpiry(SESSION.USER, content, SESSION.TIME));
    }
  }

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/api/login', {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    });
    if(response.ok){
      fetchUser();
      return navigate(ROUTER_PATH.HOME);
    }
    if(response.status === 403){
      return setMessage('Nieprawidłowy email lub hasło');
    }
    console.error('Error', response.status, response.statusText);
  }

  return (
    <div className='login-form-div-wrapper'>
      <form onSubmit={submit}>
        <h6>Logowanie</h6>
        <SignInLabel context='Podaj adres email:' />
        <SignInInput inputType='email' className='signin-input' onChange={handleEmail} />
        <SignInLabel context='Podaj hasło:' />
        <SignInInput inputType='password' className='signin-input' onChange={handlePassword} />
        <Button buttonType='submit' className='login-button-wrapper' onClick={()=>{}} buttonTittle='Zaloguj' />
      </form>
      {message && <div className='error-message-div-wrapper'>{message}</div>}
      <LoginFormLinks />
    </div>
  );
}

export default LoginForm;