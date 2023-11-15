import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import LoginPage from '../pages/LoginPage';
import Layout from '../pages/Layout';
import RegisterPage from '../pages/RegisterPage';
import RegisterSuccessfulPage from '../pages/RegisterSuccessfulPage';
import AccountConfirmPage from '../pages/AccountConfirmPage';
import AccountNoActivePage from "../pages/AccountNoActivePage";
import UserPanelPage from "../pages/UserPanelPage";
import NotLoggedPage from "../pages/NotLoggedPage";
import RestorePasswordPage from "../pages/RestorePasswordPage";
import SetNewPasswordPage from "../pages/SetNewPasswordPage";
import PasswordChangedPage from "../pages/PasswordChangedPage";
import UserSettingsPage from "../pages/UserSettingsPage";
import CalculatorsPage from "../pages/CalculatorsPage";
import CheckProductPage from "../pages/CheckProductPage";
import UserProfilPage from "../pages/UserProfilPage";
import { UserAuth } from "../context/UserDataContext";
import {ROUTER_PATH} from "./RouterPath";


const Routing = () => {

  const {user} = useContext(UserAuth);

  if(user){
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path={ROUTER_PATH.HOME} element={ user.is_active ? <HomePage /> : <AccountNoActivePage />} />
          <Route path={ROUTER_PATH.LOGIN} element={ user.is_active ? <HomePage /> : <AccountNoActivePage />} />
          <Route path={ROUTER_PATH.REGISTER} element={ user.is_active ? <HomePage /> : <AccountNoActivePage />} />
          <Route path={ROUTER_PATH.RESTORE_PASSWORD} element={ user.is_active ? <HomePage /> : <AccountNoActivePage />} />
          <Route path={ROUTER_PATH.REGISTER_SUCCESFUL} element={ user.is_active ? <HomePage /> : <AccountNoActivePage />} />
          <Route path={ROUTER_PATH.ACCOUNT_CONFIRM} element={ <AccountConfirmPage /> } />
          <Route path={ROUTER_PATH.SET_NEW_PASSWORD} element={ user.is_active ? <SetNewPasswordPage /> : <AccountNoActivePage />} />            
          <Route path={ROUTER_PATH.PASSWORD_CHANGED} element={<PasswordChangedPage />} />
          <Route path={ROUTER_PATH.USER_PANEL} element={ user.is_active ? <UserPanelPage /> : <AccountNoActivePage />} />
          <Route path={ROUTER_PATH.USER_SETTINGS} element={ user.is_active ? <UserSettingsPage /> : <AccountNoActivePage />} />
          <Route path={ROUTER_PATH.USER_PROFIL} element={ user.is_active ? <UserProfilPage /> : <AccountNoActivePage />} />
          <Route path={ROUTER_PATH.CALCULATORS} element={ user.is_active ? <CalculatorsPage /> : <AccountNoActivePage /> } />
          <Route path={ROUTER_PATH.CHECK_PRODUCT} element={ user.is_active ? <CheckProductPage /> : <AccountNoActivePage /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  }
  else {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={ROUTER_PATH.HOME} element={<HomePage />} />
          <Route path={ROUTER_PATH.LOGIN} element={<LoginPage />} />
          <Route path={ROUTER_PATH.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTER_PATH.RESTORE_PASSWORD} element={ <RestorePasswordPage />} />
          <Route path={ROUTER_PATH.REGISTER_SUCCESFUL} element={<RegisterSuccessfulPage />} />
          <Route path={ROUTER_PATH.ACCOUNT_CONFIRM} element={<AccountConfirmPage />} />
          <Route path={ROUTER_PATH.SET_NEW_PASSWORD} element={<SetNewPasswordPage />} />
          <Route path={ROUTER_PATH.PASSWORD_CHANGED} element={<PasswordChangedPage />} />
          <Route path={ROUTER_PATH.USER_PANEL} element={ <NotLoggedPage /> } />
          <Route path={ROUTER_PATH.USER_SETTINGS} element={ <NotLoggedPage /> } />
          <Route path={ROUTER_PATH.USER_PROFIL} element={ <NotLoggedPage /> } />
          <Route path={ROUTER_PATH.CALCULATORS} element={ <CalculatorsPage /> } />
          <Route path={ROUTER_PATH.CHECK_PRODUCT} element={ <CheckProductPage /> } />
        </Route>
      </Routes>
    </BrowserRouter>
    );
  }
}

export default Routing;