import React, {useState, useEffect} from 'react';
import Routing from './Routing';
import './styles/index.scss';


const App = () => {

  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const [lastLogin, SetLastLogin] = useState<Date>(new Date());
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [birthday, setBirthday] = useState<Date>(new Date());
  const [createdAt, setCreatedAt] = useState<Date>(new Date());
  const [isActive, setIsActive] = useState<boolean>(false);

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
      if(content.detail === 'Unauthenticated!'){}
      else{
        setIsLogged(true);
        setId(content.id);
        SetLastLogin(content.last_login);
        setEmail(content.email);
        setName(content.name);
        setSurname(content.surname);
        setBirthday(content.birthday);
        setCreatedAt(content.created_at);
        setIsActive(content.is_active);
      }
      }
    )();
  });
  
  return (
    <Routing isLogged={isLogged} id={id} lastLogin={lastLogin} email={email} name={name} surname={surname} birthday={birthday} createdAt={createdAt} isActive={isActive} setName={setName} />
  );  
}

export default App;