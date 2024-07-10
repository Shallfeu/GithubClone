import { ReactNode } from 'react';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import {useUserStore} from "@/entities/User";


interface RequireAuthProps {
    children: ReactNode;
}

export function RequireAuth(props: RequireAuthProps) {
    const {token, username} = useUserStore()

    const { children } = props;

    const location = useLocation();

    if (!token || !username) {
        return <Navigate to={RoutePath.auth} state={{ from: location }} replace />;
    }

    return children;
}