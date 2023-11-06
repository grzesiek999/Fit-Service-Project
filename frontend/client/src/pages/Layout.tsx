import React from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import LayoutMenu from '../components/organisms/Layout/LayoutMenu';
import AuthorizationDiv from '../components/molecules/Layout/AuthorizationDiv';


type LayoutProps = {
  name: string;
  setName: (name: string) => void;
}

const Layout = ({ name, setName }: LayoutProps) => {

  const navigate = useNavigate();

  const logout = async () => {
    const response = await fetch('http://localhost:8000/api/logout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    });
    if(response.ok){
      setName('');
      navigate('/');
      setTimeout(() => {
        window.location.reload();
      }, 100);
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