import { type ReactElement } from 'react';
import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from 'react-router-dom';

import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';

import HomePage from "../pages/HomePage";
import LoginPage from '../pages/LoginPage';
import WebsiteLayout from '../pages/WebsiteLayout';
import RegisterPage from '../pages/RegisterPage';
import RegisterSuccessfulPage from '../pages/RegisterSuccessfulPage';
import AccountConfirmPage from '../pages/AccountConfirmPage';
import AccountNoActivePage from "../pages/AccountNoActivePage";
import UserPanelPage from "../pages/UserPanelPage";
import RestorePasswordPage from "../pages/RestorePasswordPage";
import SetNewPasswordPage from "../pages/SetNewPasswordPage";
import PasswordChangedPage from "../pages/PasswordChangedPage";
import UserSettingsPage from "../pages/UserSettingsPage";
import CheckProductPage from "../pages/CheckProductPage";
import UserProfilPage from "../pages/UserProfilPage";
import {ROUTER_PATH} from "./RouterPath";
import CalculatorsPage from '../pages/CalculatorsPage';
import CalculatorsLyaout from '../components/organisms/Layouts/Calculators/CalculatorsLayout';
import UserPanelLyaout from '../components/organisms/Layouts/UserPanel/UserPanelLayout';
import AddParametersPage from '../pages/AddParametersPage';
import BmiCalculatorPage from '../pages/BmiCalculatorPage';
import BmrCalculatorPage from '../pages/BmrCalculatorPage';
import DietsPage from '../pages/DietsPage';
import NewsPage from '../pages/NewsPage';
import InformationsPage from '../pages/InformationsPage';
import MyMealsPage from '../pages/MyMealsPage';
import InformationsToDiet from '../pages/DietQuestionnairePage';
import DietQuestionnairePage from '../pages/DietQuestionnairePage';
import DietPurchasedPage from '../pages/DietPurchasedPage';
import MyDietsPage from '../pages/MyDietsPage';


const ROUTER = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<WebsiteLayout />}>
      <Route path={ROUTER_PATH.HOME} element={<HomePage />} />
      <Route path={ROUTER_PATH.ACCOUNT_CONFIRM} element={ <AccountConfirmPage /> } />
      <Route path={ROUTER_PATH.SET_NEW_PASSWORD} element={<SetNewPasswordPage />} />
      <Route path={ROUTER_PATH.PASSWORD_CHANGED} element={<PasswordChangedPage />} />
      <Route path={ROUTER_PATH.ACCOUNT_NO_ACTIVE} element={<AccountNoActivePage />} />
      <Route path={ROUTER_PATH.CALCULATORS} element={<CalculatorsLyaout />} >
        <Route path={ROUTER_PATH.CALCULATORS} element={ <CalculatorsPage /> } />
        <Route path={ROUTER_PATH.BMI} element={ <BmiCalculatorPage /> } />
        <Route path={ROUTER_PATH.BMR} element={ <BmrCalculatorPage /> } />
        <Route path={ROUTER_PATH.CHECK_PRODUCT} element={ <CheckProductPage /> } />
      </Route>
      <Route path={ROUTER_PATH.DIETS} element={<DietsPage />} />
      <Route path={ROUTER_PATH.NEWS} element={<NewsPage />} />
      <Route path={ROUTER_PATH.INFORMATIONS} element={<InformationsPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTER_PATH.USER_PANEL} element={<UserPanelLyaout />} >
          <Route path={ROUTER_PATH.USER_PANEL} element={<UserPanelPage />} />
          <Route path={ROUTER_PATH.USER_PROFIL} element={<UserProfilPage />} />
          <Route path={ROUTER_PATH.ADD_PARAMETERS} element={<AddParametersPage />} />
          <Route path={ROUTER_PATH.MY_DIETS} element={<MyDietsPage />} />
          <Route path={ROUTER_PATH.MY_MEALS} element={<MyMealsPage />} />
          <Route path={ROUTER_PATH.USER_SETTINGS} element={<UserSettingsPage />} />
        </Route>
        <Route path={ROUTER_PATH.DIET_QUESTIONNAIRE} element={<DietQuestionnairePage />} />
        <Route path={ROUTER_PATH.DIET_PURCHASED} element={<DietPurchasedPage />} />
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