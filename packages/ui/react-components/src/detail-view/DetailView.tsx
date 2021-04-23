import React from 'react';
import { Undertittel } from 'nav-frontend-typografi';
import classnames from 'classnames';
import './detailView.less';

export interface DetailViewProps {
    title: string;
    children: React.ReactNode;
    contentAfterTitleRenderer?: () => React.ReactNode;
    className?: string;
}

const DetailView = ({
    title,
    children,
    contentAfterTitleRenderer,
    className,
}: DetailViewProps) => {
    const cls = classnames('detailView', {
        [className]: !!className,
    });
    return (
        <div className={cls}>
            <div className="detailView__titleContainer">
                <Undertittel>{title}</Undertittel>
                {contentAfterTitleRenderer && (
                    <div className="detailView__nextToTitle">
                        {contentAfterTitleRenderer()}
                    </div>
                )}
            </div>
            {children}
        </div>
    );
};

export default DetailView;
