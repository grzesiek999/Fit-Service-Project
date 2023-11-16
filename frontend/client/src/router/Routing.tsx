import { type ReactElement } from 'react';
import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from 'react-router-dom';

import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';

import HomePage from "../pages/HomePage";
import LoginPage from '../pages/LoginPage';
import Layout from '../pages/Layout';
import RegisterPage from '../pages/RegisterPage';
import RegisterSuccessfulPage from '../pages/RegisterSuccessfulPage';
import AccountConfirmPage from '../pages/AccountConfirmPage';
import AccountNoActivePage from "../pages/AccountNoActivePage";
import UserPanelPage from "../pages/UserPanelPage";
import RestorePasswordPage from "../pages/RestorePasswordPage";
import SetNewPasswordPage from "../pages/SetNewPasswordPage";
import PasswordChangedPage from "../pages/PasswordChangedPage";
import UserSettingsPage from "../pages/UserSettingsPage";
import CalculatorsPage from "../pages/CalculatorsPage";
import CheckProductPage from "../pages/CheckProductPage";
import UserProfilPage from "../pages/UserProfilPage";
import {ROUTER_PATH} from "./RouterPath";


const ROUTER = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path={ROUTER_PATH.HOME} element={<HomePage />} />
      <Route path={ROUTER_PATH.ACCOUNT_CONFIRM} element={ <AccountConfirmPage /> } />
      <Route path={ROUTER_PATH.SET_NEW_PASSWORD} element={<SetNewPasswordPage />} />
      <Route path={ROUTER_PATH.PASSWORD_CHANGED} element={<PasswordChangedPage />} />
      <Route path={ROUTER_PATH.CALCULATORS} element={ <CalculatorsPage /> } />
      <Route path={ROUTER_PATH.CHECK_PRODUCT} element={ <CheckProductPage /> } />
      <Route path={ROUTER_PATH.ACCOUNT_NO_ACTIVE} element={<AccountNoActivePage />} />
      <Route element={<ProtectedRoute />}>
        
        <Route path={ROUTER_PATH.USER_PANEL} element={<UserPanelPage />} />
        <Route path={ROUTER_PATH.USER_SETTINGS} element={<UserSettingsPage />} />
        <Route path={ROUTER_PATH.USER_PROFIL} element={<UserProfilPage />} />
      </Route>
      <Route element={<PublicRoute />}>
        <Route path={ROUTER_PATH.LOGIN} element={<LoginPage />} />
        <Route path={ROUTER_PATH.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTER_PATH.RESTORE_PASSWORD} element={<RestorePasswordPage />} />
        <Route path={ROUTER_PATH.REGISTER_SUCCESFUL} element={<RegisterSuccessfulPage />} />
      </Route>
    </Route>
  )
);

export default function Router(): ReactElement {
  return <RouterProvider router={ROUTER} />;
}