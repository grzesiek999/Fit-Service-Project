import React, { useEffect, useContext} from 'react';
import Routing from './router/Routing';
import './styles/index.scss';
import { UserAuth } from './context/UserDataContext';
import { getUserWithExpiry } from './utils/LocalStorageManagment';
import { SESSION } from './constant/Session';


const App = () => {

  const {sigIn, user} = useContext(UserAuth);
  
  useEffect(() => {
    if (!user) { 
      sigIn(getUserWithExpiry(SESSION.USER));
    }
  }, [getUserWithExpiry(SESSION.USER), user]);
  
  return (
    <Routing />
  );  
}

export default App;