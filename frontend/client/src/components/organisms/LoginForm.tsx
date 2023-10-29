import React, {SyntheticEvent, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import EmailRegisterInput from '../../components/atoms/inputs/EmailRegisterInput';
import PasswordRegisterInput from '../../components/atoms/inputs/PasswordRegisterInput';
import LoginFormLinks from '../molecules/LoginFormLinks';


const LoginForm = ({setName}: {setName: (name: string) => void}) => {

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
            <EmailRegisterInput onEmailChange={handleEmail} />
            <PasswordRegisterInput onPasswordChange={handlePassword} />
            <button type='submit'>Zaloguj się</button>
          </form>
          {message && <div>{message}</div>}
        </div>
      <LoginFormLinks />
      </div>
    );
  }
  
  export default LoginForm;