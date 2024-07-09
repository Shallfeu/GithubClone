import React from 'react';
import {Repository} from "../../model/types/Repository.ts";
import RepositoryCard from "../RepositoryCard/RepositoryCard.tsx";
import cls from "./RepositoriesList.module.scss";
import {classNames} from "@/shared/lib/classNames/classNames.ts";

interface RepositoryListProps {
    repositories: Repository[]
}

const RepositoriesList = (props: RepositoryListProps) => {
    const {repositories} = props;

    return (
        <div className={classNames(cls.List, {}, [])}>
            {repositories.map(repository => <RepositoryCard
                key={repository.id}
                id={repository.id}
                name={repository.name}
                stars={repository.stars}
                lastCommit={repository.lastCommit}
                link={repository.url}
                className={cls.Card}
            />)}
        </div>
    );
};

export default RepositoriesList;