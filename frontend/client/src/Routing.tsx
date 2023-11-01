import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import Layout from './pages/Layout';
import RegisterPage from './pages/RegisterPage';
import RegisterSuccessfulPage from './pages/RegisterSuccessfulPage';
import AccountConfirmPage from './pages/AccountConfirmPage';
import AccountNoActivePage from "./pages/AccountNoActivePage";


const Routing = ({isLogged, isActive, name, setName} : {isLogged: boolean, isActive: boolean, name: string,  setName: (name: string) => void}) => {
    if(isLogged===false){
        return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout name={name} setName={setName}/>}>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<LoginPage setName={setName} />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/register_successful" element={<RegisterSuccessfulPage />} />
                <Route path='/account_confirm/:uid/:token' element={<AccountConfirmPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        );
    }
    else {
        return (
          <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout name={name} setName={setName}/>}>
                <Route index element={ isActive ? <HomePage /> : <AccountNoActivePage />} />
                <Route path="/login" element={ isActive ? <HomePage /> : <AccountNoActivePage />} />
                <Route path="/register" element={ isActive ? <HomePage /> : <AccountNoActivePage />} />
                <Route path="/register_successful" element={ isActive ? <HomePage /> : <AccountNoActivePage />} />
                <Route path='/account_confirm/:uid/:token' element={ <AccountConfirmPage /> } />
            </Route>
            </Routes>
          </BrowserRouter>
        );
    }
}

export default Routing;