import React, {SyntheticEvent, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import LoginFormLinks from '../../molecules/Login/LoginFormLinks';
import Button from '../../atoms/buttons/Button';
import SignInInput from '../../atoms/inputs/SignInInput';
import { UserAuth } from '../../../context/UserDataContext';




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
      sigIn(content);
    }
  }

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    });
    if(response.ok){
      fetchUser();
      return navigate('/');
    }
    if(response.status === 403){
      return setMessage('Nieprawidłowy email lub hasło');
    }
    console.error('Error', response.status, response.statusText);
  }

  return (
    <div>
      <div>
        <form onSubmit={submit}>
          <SignInInput inputType='email' onChange={handleEmail} />
          <SignInInput inputType='password' onChange={handlePassword} />
          <Button buttonType='submit' className='login-button-wrapper' onClick={()=>{}} buttonTittle='Zaloguj' />
        </form>
        {message && <div>{message}</div>}
      </div>
      <LoginFormLinks />
    </div>
  );
}

export default LoginForm;