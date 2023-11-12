import React, {useState, useEffect} from 'react';
import Routing from './Routing';
import './styles/index.scss';


const App = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isActive, setIsActive] = useState<boolean>(true);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    (
      async () =>{
        const response = await fetch('http://localhost:8000/api/user', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
      }
      );

      const content = await response.json();
      if(content.detail === 'Unauthenticated!'){
        setName('');
      }
      else{
        setIsLogged(true);
        setIsActive(content.is_active);
        setEmail(content.email);
        setName(content.name);
      }
      }
    )();
  });

  return (
    <Routing isLogged={isLogged} isActive={isActive} email={email} name={name} setName={setName} />
  );  
}

export default App;