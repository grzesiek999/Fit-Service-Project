import React from 'react'
import LoginForm from '../../components/organisms/LoginForm';


const LoginPage = ({setName}: {setName: (name: string) => void}) => {

  return (
    <main>
      <h1>Zaloguj sie</h1>
      <LoginForm setName={setName} />
    </main>
  );
}

export default LoginPage;