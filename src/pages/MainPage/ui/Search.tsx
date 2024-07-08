// src/RepositorySearch.tsx
import React, {useState, useEffect, FormEvent} from 'react';
import {useLazyQuery, useQuery} from '@apollo/client';
import {GET_USER_REPOSITORIES, SEARCH_REPOSITORIES} from './queries';
import useRepositoriesStore from "./store";
import Pagination from "../../../shared/ui/Pagination/Pagination.tsx";

const PAGE_SIZE = 10;

const RepositorySearch: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const {
        repositories,
        currentPage,
        totalPages,
        setRepositories,
        setCurrentPage,
        clearRepositories
    } = useRepositoriesStore();

    const calculateTotalPages = (totalCount: number) => Math.ceil(totalCount / 10);

    const {loading: userLoading, error: userError, fetchMore: fetchMoreUser} = useQuery(GET_USER_REPOSITORIES, {
        variables: {first: PAGE_SIZE},
        notifyOnNetworkStatusChange: true,
        onCompleted: (data) => {
            const {edges, totalCount} = data.viewer.repositories;

            setRepositories(
                edges.map((edge: any) => edge.node),
                Math.ceil(totalCount / PAGE_SIZE),
            );
        },
        skip: !!searchTerm,
    });

    const [searchRepositories, {
        loading: searchLoading,
        error: searchError,
        fetchMore: fetchMoreSearch
    }] = useLazyQuery(SEARCH_REPOSITORIES, {
        notifyOnNetworkStatusChange: true,
        onCompleted: (data) => {
            const {edges, repositoryCount} = data.search;

            setRepositories(
                edges.map((edge: any) => edge.node),
                Math.ceil(repositoryCount / PAGE_SIZE),
            );
        },
    });

    useEffect(() => {
        if (!searchTerm) {
            clearRepositories();
        }
    }, [searchTerm, clearRepositories]);

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        clearRepositories();

        if (searchTerm) {
            searchRepositories({variables: {query: searchTerm, first: PAGE_SIZE}});
        }
    };

    const loadPage = (page: number) => {
        const after = (page - 1) * PAGE_SIZE;

        setCurrentPage(page);

        if (searchTerm) {
            searchRepositories({variables: {query: searchTerm, first: PAGE_SIZE, after}});
        } else {
            fetchMoreUser({variables: {first: PAGE_SIZE, after}});
        }
    };

    if ((userLoading || searchLoading) && !repositories.length) return <p>Loading...</p>;

    if (userError || searchError) return <p>Error: {(userError || searchError)?.message}</p>;

    return (
        <div>
            <h2>Search Repositories</h2>

            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for repositories..."
                />
                <button type="submit">Search</button>
            </form>

            <ul>
                {repositories.map((repo) => (
                    <li key={repo.id}>
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                        <p>Owner: {repo.owner.login}</p>
                        <a href={repo.url} target="_blank" rel="noopener noreferrer">
                            Repository Link
                        </a>
                    </li>
                ))}
            </ul>

            <Pagination
                currentPage={currentPage}
                totalCount={totalPages}
                pageSize={10}
                onPageChange={page => loadPage(page)}
            />
        </div>
    );
};

export default RepositorySearch;
