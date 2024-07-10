import React, {useCallback} from 'react';
import {AuthForm} from "@/features/authByToken";
import cls from './AuthPage.module.scss'
import {Page} from "@/widgets/Page";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "../../../shared/config/routeConfig/routeConfig.tsx";

const AuthPage = () => {
    const navigate = useNavigate();

    const handleSuccessAuth = useCallback(() => {
        navigate(RoutePath.main)
    }, [navigate])

    return (
        <Page>
            <div className={cls.form}>
                <AuthForm onSuccessAuth={handleSuccessAuth} />
            </div>
        </Page>
    );
};

export default AuthPage;