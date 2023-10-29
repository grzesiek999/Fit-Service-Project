import React, {SyntheticEvent, useState} from 'react';
import '../../styles/index.scss';
import { HandleType } from './LoginPageType';
import { useNavigate } from 'react-router-dom';



const LoginPage = ({setName}: {setName: (name: string) => void}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [message, setMessage] = useState('');



  const handleFocus: HandleType = (event: React.FocusEvent<HTMLInputElement>, newPlaceholder) => {
    event.currentTarget.placeholder = newPlaceholder;
  };

  const handleBlur: HandleType = (event: React.FocusEvent<HTMLInputElement>, newPlaceholder) => {
    event.currentTarget.placeholder = newPlaceholder;
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
      <form onSubmit={submit}>
        <h1>Zaloguj sie</h1>

        <input 
          type='email' 
          className='register-input-form' 
          placeholder="email@gmail.com" 
          onFocus={(event) => handleFocus(event, '')}
          onBlur={(event) => handleBlur(event, 'email@gmail.com')}
          required
          onChange={e => setEmail(e.target.value)}
        />

        <input 
          type='password' 
          className='register-input-form' 
          placeholder="hasło" 
          onFocus={(event) => handleFocus(event, '')}
          onBlur={(event) => handleBlur(event, 'hasło')}
          required
          onChange={e => setPassword(e.target.value)}
        />

        <button type='submit'>Zaloguj się</button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
}

export default LoginPage;