import React, { useContext } from 'react';
import { ROUTER_PATH } from './RouterPath';
import { Navigate, Outlet } from 'react-router-dom';
import { UserAuth } from '../context/UserDataContext';


export default function ProtectedRoute() {
    
    const {user} = useContext(UserAuth);

    if(!user){
        return <Navigate to={ROUTER_PATH.LOGIN} />;
    }

    if(!user.is_active) {
        return <Navigate to={ROUTER_PATH.ACCOUNT_NO_ACTIVE} />
    }

    return <Outlet />;
}