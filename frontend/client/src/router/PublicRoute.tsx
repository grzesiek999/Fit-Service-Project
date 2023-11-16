import React, { useContext } from 'react';
import { ROUTER_PATH } from './RouterPath';
import { Navigate, Outlet } from 'react-router-dom';
import { UserAuth } from '../context/UserDataContext';


export default function PublicRoute() {

    const {user} = useContext(UserAuth);

    if(user){
        return <Navigate to={ROUTER_PATH.HOME} />;
    }

    return <Outlet />;
}