import React, {SyntheticEvent, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import LoginFormLinks from '../../molecules/Login/LoginFormLinks';
import Button from '../../atoms/buttons/Button';
import SignInInput from '../../atoms/inputs/SignInInput';


type LoginFormProps = {
  setName: (name: string) => void;
}

const LoginForm = ({setName}: LoginFormProps) => {

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
      const content = await response.json();
      setName(content.name);
      return navigate('/');
    }
    else {
      if(response.status === 403){
        return setMessage('Nieprawidłowy email lub hasło');
      }
      else {
        console.error('Error', response.status, response.statusText);
      }
    }
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