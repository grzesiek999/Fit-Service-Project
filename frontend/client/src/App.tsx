import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from './pages/LoginPage/LoginPage';
import Layout from './pages/Layout/Layout';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import RegisterSuccessfulPage from './pages/RegisterSuccessfulPage/RegisterSuccessfulPage';

function App() {

  const [name, setName] = useState('');

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
        setName(content.name);
      }

      }
    )();
  });


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout name={name} setName={setName}/>}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage setName={setName} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register_successful" element={<RegisterSuccessfulPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;