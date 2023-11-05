import React from 'react'
import LoginForm from '../organisms/LoginForm';


type LoginPageTemplateProps = {
  setName: (name: string) => void;
}

const LoginPageTemplate = ({setName}: LoginPageTemplateProps) => {

  return (
    <main>
      <h1>Zaloguj sie</h1>
      <LoginForm setName={setName} />
    </main>
  );
}

export default LoginPageTemplate;