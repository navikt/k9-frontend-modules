import { Element } from 'nav-frontend-typografi';
import React from 'react';
import classNames from 'classnames';
import './labelledContent.less';

export interface LabelledContentProps {
    label: string | React.ReactNode;
    content: React.ReactNode;
    labelTag?: string;
    indentContent?: boolean;
}

const LabelledContent = ({ label, content, labelTag, indentContent }: LabelledContentProps) => {
    const cl = classNames('labelledContent__content', {
        labelledContent__indentation: indentContent,
    });
    return (
        <div className="labelledContent">
            <Element className="labelledContent__label" tag={labelTag || 'p'}>
                {label}
            </Element>
            <div className={cl}>
                <div>{content}</div>
            </div>
        </div>
    );
};

export default LabelledContent;
