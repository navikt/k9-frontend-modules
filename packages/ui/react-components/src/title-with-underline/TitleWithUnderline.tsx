import React from 'react';
import { Undertittel as TitleComponent } from 'nav-frontend-typografi';
import './titleWithUnderline.less';

interface TitleWithUnderlineProps {
    children: React.ReactNode;
    titleClass?: string;
    contentAfterTitleRenderer?: () => React.ReactNode;
}

const TitleWithUnderline = ({ children, titleClass, contentAfterTitleRenderer }: TitleWithUnderlineProps) => (
    <>
        <div className="titleWithUnderline">
            <TitleComponent className={titleClass}>{children}</TitleComponent>
            {contentAfterTitleRenderer && contentAfterTitleRenderer()}
        </div>
        <hr style={{ color: '#B7B1A9' }} />
    </>
);

export default TitleWithUnderline;
