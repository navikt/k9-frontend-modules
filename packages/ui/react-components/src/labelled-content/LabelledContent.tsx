import { Element } from 'nav-frontend-typografi';
import React from 'react';
import classNames from 'classnames';
import styles from './labelledContent.less';

export interface LabelledContentProps {
    label: string | React.ReactNode;
    content: React.ReactNode;
    labelTag?: string;
    indentContent?: boolean;
}

const LabelledContent = ({ label, content, labelTag, indentContent }: LabelledContentProps) => {
    const cl = classNames(styles.labelledContent__content, {
        [styles.labelledContent__indentation]: indentContent,
    });
    return (
        <div className={styles.labelledContent}>
            <Element className={styles.labelledContent__label} tag={labelTag || 'p'}>
                {label}
            </Element>
            <div className={cl}>
                <div>{content}</div>
            </div>
        </div>
    );
};

export default LabelledContent;
