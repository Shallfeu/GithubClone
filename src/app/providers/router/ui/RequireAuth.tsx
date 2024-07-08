import { ReactNode } from 'react';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    children: ReactNode;
}

export function RequireAuth(props: RequireAuthProps) {
    const { children } = props;
    const location = useLocation();
    //
    // if (!0) {
    //     return <Navigate to={RoutePath.AUTH} state={{ from: location }} replace />;
    // }

    return children;
}