import React from 'react';
import {useParams} from "react-router-dom";
import Repository from "../../../../entities/Repository/ui/Repository/Repository.tsx";

const RepositoryDetailsPage = () => {
    const {id} = useParams();

    return (
        <Repository id={id} />
    );
};

export default RepositoryDetailsPage;