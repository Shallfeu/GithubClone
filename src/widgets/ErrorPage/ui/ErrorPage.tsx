import React from 'react';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = (props: ErrorPageProps) => {
    const { className } = props;

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={className}>
            <button onClick={reloadPage}>
                Reload page
            </button>
        </div>
    );
};
