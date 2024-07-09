import React, {FC, useEffect} from 'react';
import {useRepositoriesStore} from "../../model/store/repositoriesStore.ts";
import {useSearchStore} from "@/features/searchRepositoryByName";
import {RepositoriesList} from "@/entities/Repository";
import {PageLoader} from "@/widgets/PageLoader";
import {SearchForm} from "@/features/searchRepositoryByName";
import Pagination from "@/shared/ui/Pagination/Pagination.tsx";
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from "./RepositoriesPaginatableList.module.scss";
import {useSearchParams} from "react-router-dom";

interface RepositoriesPaginatableListProps {
    className?: string;
}

const RepositoriesPaginatableList: FC = (props: RepositoriesPaginatableListProps) => {
    const {className} = props;

    const [searchParams] = useSearchParams();

    const {
        search,
        setSearch,
        getRepositoriesBySearch
    } = useSearchStore((state) => ({
        search: state.search,
        setSearch: state.setSearch,
        getRepositoriesBySearch: state.getRepositoriesBySearch
    }))

    const {
        username,
        repositories,
        perPage,
        isLoading,
        error,
        currentPage,
        hasPreviousPage,
        hasNextPage,
        getUserRepositories,
        setCurrentPage,
        nextPage,
        prevPage,
    } = useRepositoriesStore((state) => ({
        username: state.username,
        repositories: state.repositories,
        perPage: state.perPage,
        isLoading: state.isLoading,
        error: state.error,
        currentPage: state.currentPage,
        setCurrentPage: state.setCurrentPage,
        getUserRepositories: state.getUserRepositories,
        nextPage: state.nextPage,
        prevPage: state.prevPage,
        hasPreviousPage: state.hasPreviousPage,
        hasNextPage: state.hasNextPage,
    }));

    useEffect(() => {
        const search = searchParams.get('search');

        if(search) {
            setSearch(search);
            getRepositoriesBySearch({first: perPage})
        } else {
            getUserRepositories({first: perPage});
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!search) {
            getUserRepositories({first: perPage});
        }
    }, [search, getUserRepositories, perPage]);

    const handleSearchSubmit = () => {
        setCurrentPage(1);
        if (search) {
            getRepositoriesBySearch({first: perPage})
        }
    };

    const handleNextPage = () => {
        const callback = search ? getRepositoriesBySearch : getUserRepositories;
        setCurrentPage(currentPage + 1);
        nextPage(callback)
    }
    const handlePrevPage = () => {
        const callback = search ? getRepositoriesBySearch : getUserRepositories;
        setCurrentPage(currentPage - 1);
        prevPage(callback)
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            <h1>Repositories of {username}</h1>

            <SearchForm onSearch={handleSearchSubmit}/>

            {
                isLoading
                    ? <PageLoader/>
                    : <RepositoriesList repositories={repositories}/>
            }

            <Pagination
                currentPage={currentPage}
                hasNextPage={hasNextPage}
                hasPrevPage={hasPreviousPage}
                onPrevious={handlePrevPage}
                onNext={handleNextPage}
            />
        </div>
    );
};

export default RepositoriesPaginatableList;
