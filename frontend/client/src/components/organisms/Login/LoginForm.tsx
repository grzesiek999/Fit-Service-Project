import React, {SyntheticEvent, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import LoginFormLinks from '../../molecules/Login/LoginFormLinks';
import Button from '../../atoms/buttons/Button';
import SignInInput from '../../atoms/inputs/SignInInput';
import { UserAuth } from '../../../context/UserDataContext';
import {setUserWithExpiry} from '../../../utils/LocalStorageManagment';
import { SESSION } from '../../../constant/Session';
import { ROUTER_PATH } from '../../../router/RouterPath';


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
    <div className='login-organism-div-wrapper'>
      <div className='login-form-div-wrapper'>
        <form onSubmit={submit}>
          <h6>Logowanie</h6>
          <label className='login-form-label-wrapper'>Podaj adres email:</label>
          <SignInInput inputType='email' className='email-register-input' onChange={handleEmail} />
          <label className='login-form-label-wrapper'>Podaj hasło:</label>
          <SignInInput inputType='password' className='password-register-input' onChange={handlePassword} />
          <Button buttonType='submit' className='login-button-wrapper' onClick={()=>{}} buttonTittle='Zaloguj' />
        </form>
        {message && <div>{message}</div>}
      </div>
      <LoginFormLinks />
    </div>
  );
}

export default LoginForm;