import React from 'react';
import cls from './Pagination.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {DOTS, usePagination} from "@/shared/hooks/usePagination.ts";

interface PaginationProps {
    onPageChange: (value: number) => void;
    totalCount: number;
    siblingCount?: number;
    currentPage: number;
    pageSize: number;
    className?: string;
}

const Pagination = (props: PaginationProps) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul
            className={classNames(cls.paginationContainer, { [className]: className })}
        >
            <li
                className={classNames(cls.paginationItem, {
                    [cls.disabled]: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <div className={classNames(cls.arrow, {}, [cls.left])} />
            </li>

            {paginationRange.map(pageNumber => {
                if (pageNumber === DOTS) {
                    return <li
                        key={pageNumber}
                        className={classNames(cls.paginationItem, {}, [cls.dots])}
                    >
                        &#8230;
                    </li>;
                }

                return (
                    <li
                        key={pageNumber}
                        className={classNames(cls.paginationItem, {[cls.selected]: pageNumber === currentPage}, [])}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}

            <li
                className={classNames(cls.paginationItem, {[cls.disabled]: currentPage === lastPage}, [])}
                onClick={onNext}
            >
                <div className={classNames(cls.arrow, {}, [cls.right])} />
            </li>
        </ul>
    );
};

export default Pagination;