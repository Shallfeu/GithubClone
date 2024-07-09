import React, {useEffect} from 'react';
import useRepositoryStore from "../../model/store/repositoryStore.ts";
import {PageLoader} from "@/widgets/PageLoader";
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './RepositoryDetails.module.scss'
import {formatDate} from "@/shared/lib/formatDate/formatDate.ts";

interface RepositoryDetailsProps {
    id: string;
    className?: string;
}

const RepositoryDetails = (props: RepositoryDetailsProps) => {
    const {
        id,
        className
    } = props;

    const {
        repository,
        isLoading,
        error,
        getRepository
    } = useRepositoryStore((state) => ({
        repository: state.repository,
        isLoading: state.isLoading,
        error: state.error,
        getRepository: state.getRepositoryById
    }));

    useEffect(() => {
        if (id) {
            getRepository(id)
        }
    }, [getRepository, id]);

    const handleNavigateToUserProfile = () => {
        window.location.href = repository.ownerUrl;
    }

    if (isLoading || !repository) return <PageLoader/>;

    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className={classNames(cls.details, {}, [className])}>
            <h1 className={cls.title}>
                {repository.name}
            </h1>

            <div className={cls.desc}>
                <p>{repository.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus
                    expedita impedit iste molestiae perferendis vitae voluptas? Dicta error eveniet expedita facere fuga
                    id magnam minima nemo placeat vero? Quaerat.</p>
            </div>

            <div className={cls.stars}>
                <h4>Stars:</h4>

                <span>{repository.stars}</span>
            </div>

            <div className={cls.commit}>
                <h4>Last Commit:</h4>

                <span>{formatDate(repository.lastCommit)}</span>
            </div>

            <div className={cls.owner}>
                <h4>Owner:</h4>

                <div className={cls.ownerInfo} onClick={handleNavigateToUserProfile}>
                    <img
                        className={cls.img}
                        src={repository.ownerImage}
                        alt="owner photo"
                    />

                    <span className={cls.nick}>{repository.owner}</span>
                </div>
            </div>

            <div className={cls.languages}>
                <h4>Languages:</h4>

                {repository.languages.map((languange: string) => {
                    return (
                        <span key={languange} className={cls.badge}>{languange}</span>
                    )
                })}
            </div>

            <a href={repository.url} className={cls.link}>
                <h2>This repository on Github</h2>
            </a>
        </div>
    );
};

export default RepositoryDetails;