import React, { useContext } from 'react';
import { ROUTER_PATH } from './RouterPath';
import { Navigate, Outlet } from 'react-router-dom';
import { UserAuth} from '../context/UserDataContext';


export default function AdminRoute() {
    
    const {user} = useContext(UserAuth);

    if(!localStorage.getItem('user')){
        return <Navigate to={ROUTER_PATH.LOGIN} />;
    }

    if(user && !user.is_admin) {
        return <Navigate to={ROUTER_PATH.NO_PERMISSIONS} />;
    }

    return <Outlet />;
}