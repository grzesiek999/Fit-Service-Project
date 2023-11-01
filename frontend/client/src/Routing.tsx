import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import Layout from './pages/Layout';
import RegisterPage from './pages/RegisterPage';
import RegisterSuccessfulPage from './pages/RegisterSuccessfulPage';
import AccountConfirmPage from './pages/AccountConfirmPage';
import AccountNoActivePage from "./pages/AccountNoActivePage";
import UserPanelPage from "./pages/UserPanelPage";
import NotLoggedPage from "./pages/NotLoggedPage";
import RestorePasswordPage from "./pages/RestorePasswordPage";


const Routing = ({isLogged, isActive, email, name, setName} : {isLogged: boolean, isActive: boolean, email: string, name: string,  setName: (name: string) => void}) => {
    if(isLogged===false){
        return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout name={name} setName={setName}/>}>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<LoginPage setName={setName} />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/restore_password" element={ <RestorePasswordPage />} />
                <Route path="/register_successful" element={<RegisterSuccessfulPage />} />
                <Route path='/account_confirm/:uid/:token' element={<AccountConfirmPage />} />
                <Route path="/user_panel" element={ <NotLoggedPage /> } />
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
                <Route index element={ isActive ? <HomePage /> : <AccountNoActivePage email={email} />} />
                <Route path="/login" element={ isActive ? <HomePage /> : <AccountNoActivePage email={email} />} />
                <Route path="/register" element={ isActive ? <HomePage /> : <AccountNoActivePage email={email} />} />
                <Route path="/restore_password" element={ isActive ? <HomePage /> : <AccountNoActivePage email={email} />} />
                <Route path="/register_successful" element={ isActive ? <HomePage /> : <AccountNoActivePage email={email} />} />
                <Route path='/account_confirm/:uid/:token' element={ <AccountConfirmPage /> } />
                <Route path="/user_panel" element={ isActive ? <UserPanelPage /> : <AccountNoActivePage email={email}/>} />
            </Route>
            </Routes>
          </BrowserRouter>
        );
    }
}

export default Routing;