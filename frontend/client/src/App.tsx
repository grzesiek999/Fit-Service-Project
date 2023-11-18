import React, { useEffect, useContext} from 'react';
import Routing from './router/Routing';
import './styles/index.scss';
import { UserAuth } from './context/UserDataContext';


const App = () => {

  const {sigIn} = useContext(UserAuth);
  
  useEffect(() => {
    const userDataFromLocalStorage = localStorage.getItem('user');
    if (userDataFromLocalStorage) {
        const parsedUserData = JSON.parse(userDataFromLocalStorage);
        sigIn(parsedUserData);
      }
  }, []);
  
  return (
    <Routing />
  );  
}

export default App;