import React, {useEffect} from 'react';
import {RepositoriesList} from "@/entities/Repository";
import {Repository} from "@/entities/Repository/model/types/Repository.ts";
import Pagination from "@/shared/ui/Pagination/Pagination.tsx";
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './MainPage.module.scss';
import {Input} from "@/shared/ui/Input/Input.tsx";
import useSearchStore from "../../../../features/searchRepositoryByName/model/store/searchStore.ts";
import Search from "../Search.tsx";

const MainPage = () => {
    const search = useSearchStore(state => state.search);
    const setSearch = useSearchStore(state => state.setSearch);

    useEffect(() => {

    }, []);

    return (
        <div className={classNames(cls.page, {}, [])}>
            <Search first={10}/>
            {/*<Input*/}
            {/*    value={search}*/}
            {/*    onChange={setSearch}*/}
            {/*/>*/}

            {/*<RepositoriesList*/}
            {/*    repositories={repositories}*/}
            {/*/>*/}

            {/*<Pagination*/}
            {/*    currentPage={2}*/}
            {/*    totalCount={100}*/}
            {/*    pageSize={10}*/}
            {/*    onPageChange={page => console.log(page)}*/}
            {/*/>*/}
        </div>
    );
};

export default MainPage;