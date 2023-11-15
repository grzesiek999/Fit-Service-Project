import React, { useEffect, useContext} from 'react';
import Routing from './router/Routing';
import './styles/index.scss';
import { UserAuth } from './context/UserDataContext';


const App = () => {

  const {sigIn} = useContext(UserAuth);

  const fetchUser = async () =>{
    const response = await fetch('http://localhost:8000/api/user', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    });
    const content = await response.json();
    if(content.detail === 'Unauthenticated!'){}
    else{
      sigIn(content);
    }
  } 
  
  useEffect(() => {
    fetchUser(); 
  }, []);
  
  return (
    <Routing />
  );  
}

export default App;