import React, {useEffect, useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import '../../styles/index.scss';
import { useNavigate } from 'react-router-dom';



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

  
  let menu;

  if(name===''){
    menu = (
      <div>niezalogowany
        <button type='button'>zaloguj</button>
      </div>
    )
  }
  else {
    menu = (
      <div>zalogowany {name}
      <button type='button' className='logout-button' onClick={logout}>Wyloguj</button>
</div>
    )
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/login">Login Page</Link>
          </li>
          <li>
            <Link to="/register">Register Page</Link>
          </li>
        </ul>
      </nav>
      <div>
        {menu} 
      </div>
      <Outlet />
    </>
  )
};

export default Layout;