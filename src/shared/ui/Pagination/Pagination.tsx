import React from 'react';
import cls from './Pagination.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";

interface PaginationProps {
    onNext: () => void;
    onPrevious: () => void;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    currentPage: number;
    className?: string;
}

const Pagination = (props: PaginationProps) => {
    const {
        hasPrevPage,
        hasNextPage,
        currentPage,
        className,
        onNext,
        onPrevious
    } = props;

    return (
        <ul
            className={classNames(cls.paginationContainer, {[className]: className})}
        >
            <li
                className={classNames(cls.paginationItem, {[cls.disabled]: !hasPrevPage})}
                onClick={onPrevious}
            >
                <div className={classNames(cls.arrow, {}, [cls.left])}/>
            </li>

            <li className={classNames(cls.paginationItem, {[cls.selected]: true}, [])}>
                {currentPage}
            </li>

            <li
                className={classNames(cls.paginationItem, {[cls.disabled]: !hasNextPage}, [])}
                onClick={onNext}
            >
                <div className={classNames(cls.arrow, {}, [cls.right])}/>
            </li>
        </ul>
    );
};

export default Pagination;