import React, {SyntheticEvent, useState } from 'react';
import '../../styles/index.scss';
import { HandleType } from './RegisterPageType';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  const handleFocus: HandleType = (event: React.FocusEvent<HTMLInputElement>, newPlaceholder) => {
    event.currentTarget.placeholder = newPlaceholder;
  };

  const handleBlur: HandleType = (event: React.FocusEvent<HTMLInputElement>, newPlaceholder) => {
    event.currentTarget.placeholder = newPlaceholder;
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
    <div>
      <form onSubmit={submit}>
        <h1>Register</h1>

        <input 
          type='text' 
          className='register-input-form' 
          placeholder="Imię" 
          onFocus={(event) => handleFocus(event, '')}
          onBlur={(event) => handleBlur(event, 'Imię')}
          required
          onChange={e => setName(e.target.value)}
        />

        <input 
          type='text' 
          className='register-input-form' 
          placeholder="Nazwisko" 
          onFocus={(event) => handleFocus(event, '')}
          onBlur={(event) => handleBlur(event, 'Nazwisko')}
          required
          onChange={e => setSurname(e.target.value)}
        />

        <input 
          type='date' 
          className='register-input-form' 
          required
          onChange={e => setBirthday(e.target.value)}
        />

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

        <input 
          type='password' 
          className='register-input-form' 
          placeholder="hasło" 
          onFocus={(event) => handleFocus(event, '')}
          onBlur={(event) => handleBlur(event, 'hasło')}
          required
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <button type='submit'>Utwórz Konto</button>

      </form>
      {message && <div>{message}</div>}
    </div>
  );
}

export default RegisterPage;