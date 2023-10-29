import React from 'react'
import LoginPageTemplate from '../components/tmpls/LoginPageTemplate';


const LoginPage = ({setName}: {setName: (name: string) => void}) => {

  return (
      <LoginPageTemplate setName={setName} />
  );
}

export default LoginPage;