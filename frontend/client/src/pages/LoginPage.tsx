import React from 'react'
import LoginPageTemplate from '../components/tmpls/LoginPageTemplate';


type LoginPageProps = {
  setName: (name: string) => void;
}

const LoginPage = ({setName}: LoginPageProps) => {

  return (
      <LoginPageTemplate setName={setName} />
  );
}

export default LoginPage;