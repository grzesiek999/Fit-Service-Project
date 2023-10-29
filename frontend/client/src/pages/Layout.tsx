import React from 'react';
import { Outlet, Link } from "react-router-dom";
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
        <button type='button' onClick={()=>{navigate('/login');}}>zaloguj</button>
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
      <div>
        <div>
          <Link to='/'>Logo</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Artykuły</Link>
            </li>
            <li>
              <Link to="/">Informacje</Link>
            </li>
            <li>
              <Link to="/">Diety</Link>
            </li>
            <li>
              <Link to="/">Dziennik</Link>
            </li>
            <li>
              <Link to="/">Kontakt</Link>
            </li>
          </ul>
        </nav>
        <div>
          {menu} 
        </div>
      </div>
      <Outlet />
    </>
  )
};

export default Layout;