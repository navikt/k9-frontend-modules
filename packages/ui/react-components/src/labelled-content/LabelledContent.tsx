import { Element } from 'nav-frontend-typografi';
import React from 'react';
import './labelledContent.less';

interface LabelledContentProps {
    label: string | React.ReactNode;
    content: React.ReactNode;
}

const LabelledContent = ({ label, content }: LabelledContentProps) => (
    <div className="labelledContent">
        <Element className="labelledContent__label">{label}</Element>
        <div className="labelledContent__content">{content}</div>
    </div>
);

export default LabelledContent;
