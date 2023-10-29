import React from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import LayoutMenu from '../components/organisms/LayoutMenu';
import AuthorizationDiv from '../components/molecules/AuthorizationDiv';


const Layout = ({ name, setName }: { name: string, setName: (name: string) => void }) => {

  const navigate = useNavigate();

  const logout = async () => {
    const response = await fetch('http://localhost:8000/api/logout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    });
    if(response.ok){
      setName('');
      return navigate('/');
    }
    else{
      console.log('Logout problem')
    }
  }

  let authorization_div;

  if(name===''){
    authorization_div = (
      <AuthorizationDiv name={name} logout={logout} />
    )
  }
  else {
    authorization_div = (
      <AuthorizationDiv name={name} logout={logout} />
    )
  }

  return (
    <>
      <LayoutMenu div={authorization_div} />
      <Outlet />
    </>
  )
};

export default Layout;