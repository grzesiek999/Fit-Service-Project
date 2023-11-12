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
import SetNewPasswordPage from "./pages/SetNewPasswordPage";
import PasswordChangedPage from "./pages/PasswordChangedPage";
import UserSettingsPage from "./pages/UserSettingsPage";
import CalculatorsPage from "./pages/CalculatorsPage";
import CheckProductPage from "./pages/CheckProductPage";


type RoutingProps = {
  isLogged: boolean;
  isActive: boolean;
  email: string;
  name: string;
  setName: (name: string) => void;
}

const Routing = ({isLogged, isActive, email, name, setName} : RoutingProps) => {
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
                <Route path='/set_new_password/:uid/:token' element={<SetNewPasswordPage />} />
                <Route path='/password_changed' element={<PasswordChangedPage />} />
                <Route path="/user_panel" element={ <NotLoggedPage /> } />
                <Route path="/user_settings" element={ <NotLoggedPage /> } />
                <Route path="/calculators" element={ <CalculatorsPage /> } />
                <Route path="/calculators/check_product" element={ <CheckProductPage isLogged={isLogged}/> } />
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
                <Route path='/set_new_password/:uid/:token' element={ isActive ? <SetNewPasswordPage /> : <AccountNoActivePage email={email} />} />
                <Route path='/password_changed' element={<PasswordChangedPage />} />
                <Route path="/user_panel" element={ isActive ? <UserPanelPage name={name} /> : <AccountNoActivePage email={email}/>} />
                <Route path="/user_settings" element={ isActive ? <UserSettingsPage email={email} name={name} /> : <AccountNoActivePage email={email} />} />
                <Route path="/calculators" element={ isActive ? <CalculatorsPage /> : <AccountNoActivePage email={email} /> } />
                <Route path="/calculators/check_product" element={ isActive ? <CheckProductPage isLogged={isLogged} /> : <AccountNoActivePage email={email} /> } />
            </Route>
            </Routes>
          </BrowserRouter>
        );
    }
}

export default Routing;