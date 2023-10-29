import React from 'react'
import LoginForm from '../organisms/LoginForm';


const LoginPageTemplate = ({setName}: {setName: (name: string) => void}) => {

  return (
    <main>
      <h1>Zaloguj sie</h1>
      <LoginForm setName={setName} />
    </main>
  );
}

export default LoginPageTemplate;