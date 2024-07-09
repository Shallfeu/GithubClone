import React from 'react';
import {AuthForm} from "@/features/authByToken/ui/AuthForm/AuthForm.tsx";
import cls from './AuthPage.module.scss'
import {Page} from "@/widgets/Page";

const AuthPage = () => {
    return (
        <Page>
            <div className={cls.form}>
                <AuthForm />
            </div>
        </Page>
    );
};

export default AuthPage;