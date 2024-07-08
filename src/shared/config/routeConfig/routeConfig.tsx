import React from 'react';
import {RouteProps} from 'react-router-dom';
import {MainPage} from '@/pages/MainPage';
import {RepositoryDetailsPage} from "@/pages/RepositoryDetailsPage";
import {NotFoundPage} from "@/pages/NotFoundPage";
import {AuthPage} from "@/pages/AuthPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    AUTH = 'auth',
    REPOSITORY_DETAILS = 'repository_details',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.AUTH]: '/auth',
    [AppRoutes.REPOSITORY_DETAILS]: '/repository/',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>,
        authOnly: true
    },
    [AppRoutes.AUTH]: {
        path: RoutePath.auth,
        element: <AuthPage/>,
    },
    [AppRoutes.REPOSITORY_DETAILS]: {
        path: `${RoutePath.repository_details}:id`,
        element: <RepositoryDetailsPage/>,
        authOnly: true
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>,
    },
};
