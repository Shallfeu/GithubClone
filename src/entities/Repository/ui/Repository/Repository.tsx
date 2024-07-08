import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {GET_REPOSITORY_BY_ID} from "../../model/services/getRepositoryById.ts";
import useRepositoryStore from "../../model/store/repositoryStore.ts";

interface RepositoryProps {
    id: number;
}

const Repository = (props: RepositoryProps) => {
    const {id} = props;

    const { data, loading, error } = useQuery(GET_REPOSITORY_BY_ID, {
        variables: { id },
    });

    const setRepository = useRepositoryStore((state) => state.setRepository);

    useEffect(() => {
        if (data) {
            setRepository(data.node);
        }
    }, [data, setRepository]);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>{data.node.name}</h1>
            <p>{data.node.description}</p>
            <a href={data.node.url}>Repository Link</a>
        </div>
    );
};

export default Repository;