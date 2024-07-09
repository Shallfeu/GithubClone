import React from 'react';
import cls from './MainPage.module.scss';
import RepositoriesPaginatableList from "../RepositoriesPaginatableList/RepositoriesPaginatableList.tsx";
import {Page} from "@/widgets/Page";

const MainPage = () => {
    return (
        <Page>
            <RepositoriesPaginatableList className={cls.content} />
        </Page>
    );
};

export default MainPage;