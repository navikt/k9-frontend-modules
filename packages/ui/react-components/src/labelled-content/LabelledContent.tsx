import { Element } from 'nav-frontend-typografi';
import React from 'react';
import './labelledContent.less';

export interface LabelledContentProps {
    label: string | React.ReactNode;
    content: React.ReactNode;
    labelTag?: string;
}

const LabelledContent = ({ label, content, labelTag }: LabelledContentProps) => (
    <div className="labelledContent">
        <Element className="labelledContent__label" tag={labelTag || 'p'}>
            {label}
        </Element>
        <div className="labelledContent__content">{content}</div>
    </div>
);

export default LabelledContent;
