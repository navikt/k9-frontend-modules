import Spinner from 'nav-frontend-spinner';
import React from 'react';
import PageError from '../page-error/PageError';
import styles from './pageContainer.less';

interface PageContainerProps {
    isLoading?: boolean;
    hasError?: boolean;
    preventUnmount?: boolean;
    children?: React.ReactNode;
}

const PageContainer = ({ isLoading, hasError, preventUnmount, children }: PageContainerProps): JSX.Element => {
    const shouldHideChildren = isLoading || hasError;

    const renderChildrenContent = () => {
        if (preventUnmount) {
            return <div className={shouldHideChildren ? styles.visuallyHidden : ''}>{children}</div>;
        }
        if (shouldHideChildren) {
            return null;
        }
        return children;
    };

    return (
        <>
            {isLoading && <Spinner />}
            {hasError && <PageError message="Noe gikk galt, vennligst prøv igjen senere" />}
            {renderChildrenContent()}
        </>
    );
};

export default PageContainer;
