import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {RepositoryDetails} from "@/entities/Repository";
import {Page} from "@/widgets/Page";
import {RoutePath} from "@/shared/config/routeConfig/routeConfig.tsx";
import cls from './RepositoryDetailsPage.module.scss'

const RepositoryDetailsPage = () => {
    const {id} = useParams();

    const navigate = useNavigate();

    if (!id) {
        navigate(RoutePath.main)
        return;
    }

    return (
        <Page>
            <RepositoryDetails className={cls.details} id={id}/>
        </Page>
    );
};

export default RepositoryDetailsPage;