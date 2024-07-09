import {useAuthByTokenStore} from "../../model/store/authByTokenStore.ts";
import {FormEvent} from "react";
import {Button} from "@/shared/ui/Button/Button.tsx";
import {Input} from "@/shared/ui/Input/Input.tsx";
import cls from './AuthForm.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";

interface AuthFormProps {
    className?: string;
}

export const AuthForm = (props: AuthFormProps) => {
    const {
        className
    } = props;

    const {
        username,
        token,
        isLoading,
        error,
        setUsername,
        setToken,
        clearStore
    } = useAuthByTokenStore();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!username || !token) {
            return;
        }



        clearStore();
    };

    const handleChangeUsername = (value: string) => {
        setUsername(value)
    }

    const handleChangeToken = (value: string) => {
        setToken(value)
    }

    return (
        <form onSubmit={handleSubmit} className={classNames(cls.form, {}, [className])}>
            <h2>Enter here your Github username and API token</h2>

            {error && <div>{error}</div>}

            <Input
                type="text"
                id="username"
                placeholder="username"
                value={username}
                className={cls.input}
                onChange={handleChangeUsername}
            />

            <Input
                type="text"
                id="token"
                placeholder="token"
                value={token}
                className={cls.input}
                onChange={handleChangeToken}
            />

            <Button type="submit" disabled={isLoading}>
                Login
            </Button>
        </form>
    )
}