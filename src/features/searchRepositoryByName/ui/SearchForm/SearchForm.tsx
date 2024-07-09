import React, {useCallback, useEffect} from "react";
import useSearchStore from "../../model/store/searchStore.ts";
import {Input} from "@/shared/ui/Input/Input.tsx";
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {Button} from "@/shared/ui/Button/Button.tsx";
import cls from './SearchForm.module.scss'
import {useDebounce} from "@/shared/hooks/useDebounce/useDebounce.ts";

interface SearchFormProps {
    onSearch: () => void;
    className?: string;
}

export const SearchForm = (props: SearchFormProps) => {
    const {
        onSearch,
        className
    } = props;

    const {
        search,
        setSearch,
    } = useSearchStore((state) => ({
        search: state.search,
        setSearch: state.setSearch,
    }))

    const debouncedOnSearch = useDebounce(onSearch, 1000)

    useEffect(() => {
        debouncedOnSearch();
        // eslint-disable-next-line
    }, [search]);

    const handleSearchChange = useCallback((value: string) => {
        setSearch(value);
    }, [setSearch]);

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        debouncedOnSearch()
    };

    return (
        <form className={classNames(cls.form, {}, [className])} onSubmit={handleSearchSubmit}>
            <Input
                type="text"
                placeholder="Search repositories by name..."
                value={search}
                onChange={handleSearchChange}
                className={cls.input}
                autofocus
            />

            <Button
                type="submit"
                className={cls.button}
            >
                Search
            </Button>
        </form>
    );
};