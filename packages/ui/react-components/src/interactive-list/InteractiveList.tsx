import React from 'react';
import classnames from 'classnames';
import './interactiveList.less';

export interface InteractiveListElement {
    content: React.ReactNode;
    onClick: () => void;
    active: boolean;
}

interface InteractiveListProps {
    elements: InteractiveListElement[];
}

const InteractiveListElement = (props: InteractiveListElement) => {
    const { content, active, onClick } = props;
    const cls = classnames('interactiveListElement', {
        ['interactiveListElement--active']: active === true,
    });
    return (
        <li className={cls}>
            <button
                className="interactiveListElement__button"
                type="button"
                onClick={onClick}
            >
                {content}
            </button>
        </li>
    );
};

const InteractiveList = ({ elements }: InteractiveListProps) => {
    return (
        <ul className="interactiveList">
            {elements.map((elementProps) => {
                return <InteractiveListElement {...elementProps} />;
            })}
        </ul>
    );
};

export default InteractiveList;
