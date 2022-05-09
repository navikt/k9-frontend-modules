import React from 'react';
import { Undertittel } from 'nav-frontend-typografi';
import classnames from 'classnames';
import styles from './detailView.less';

export interface DetailViewProps {
    title: string;
    children: React.ReactNode;
    contentAfterTitleRenderer?: () => React.ReactNode;
    className?: string;
}

const DetailView = ({ title, children, contentAfterTitleRenderer, className }: DetailViewProps) => {
    const cls = classnames(styles.detailView, {
        [className]: !!className,
    });
    return (
        <div className={cls}>
            <div className={styles.detailView__titleContainer}>
                <Undertittel>{title}</Undertittel>
                {contentAfterTitleRenderer && (
                    <div className={styles.detailView__nextToTitle}>{contentAfterTitleRenderer()}</div>
                )}
            </div>
            {children}
        </div>
    );
};

export default DetailView;
