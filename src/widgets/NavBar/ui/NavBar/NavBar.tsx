import {classNames} from '@/shared/lib/classNames/classNames';
import React, {memo} from 'react';
import cls from './Navbar.module.scss';
import {Link} from "react-router-dom";
import {RoutePath} from "@/shared/config/routeConfig/routeConfig.tsx";

interface NavbarProps {
    className?: string;
}

export const NavBar = memo((props: NavbarProps) => {
    const {className} = props;

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Link to={RoutePath.main}>
                <h2 className={cls.appName}>Github Clone</h2>
            </Link>
        </header>
    );
});