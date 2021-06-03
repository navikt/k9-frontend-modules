import React from 'react';
import classnames from 'classnames';
import './interactiveList.less';
import ChevronIconBlack from '../icons/ChevronIconBlack';
import ChevronIconGray from '../icons/ChevronIconGray';

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
            <button className="interactiveListElement__button" type="button" onClick={onClick}>
                <span className="interactiveListElement__button__contentContainer">
                    {content}
                    <span className="interactiveListElement__chevron">
                        {active ? <ChevronIconBlack /> : <ChevronIconGray />}
                    </span>
                </span>
            </button>
        </li>
    );
};

const InteractiveList = ({ elements }: InteractiveListProps) => (
    <ul className="interactiveList">
        {elements.map((elementProps) => (
            <InteractiveListElement {...elementProps} />
        ))}
    </ul>
);

export default InteractiveList;
