import {classNames} from '@/shared/lib/classNames/classNames';
import React, {memo} from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const NavBar = memo((props: NavbarProps) => {
    const {className} = props;

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <h2 className={cls.appName}>Github Clone</h2>
        </header>
    );
});