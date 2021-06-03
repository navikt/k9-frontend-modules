import React from 'react';
import classnames from 'classnames';
import './interactiveList.less';

const ChevronIconBlack = () => (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.2522 0.298977C12.6521 -0.099659 13.3003 -0.099659 13.7001 0.298977C14.1 0.697613 14.1 1.34393 13.7001 1.74257L7.72394 7.70102C7.32412 8.09966 6.67588 8.09966 6.27606 7.70102L0.299867 1.74257C-0.0999556 1.34393 -0.0999556 0.697613 0.299867 0.298977C0.699689 -0.099659 1.34793 -0.099659 1.74775 0.298977L7 5.53564L12.2522 0.298977Z"
            fill="#000000"
        />
    </svg>
);

const ChevronIconGray = () => (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.2522 0.298977C12.6521 -0.099659 13.3003 -0.099659 13.7001 0.298977C14.1 0.697613 14.1 1.34393 13.7001 1.74257L7.72394 7.70102C7.32412 8.09966 6.67588 8.09966 6.27606 7.70102L0.299867 1.74257C-0.0999556 1.34393 -0.0999556 0.697613 0.299867 0.298977C0.699689 -0.099659 1.34793 -0.099659 1.74775 0.298977L7 5.53564L12.2522 0.298977Z"
            fill="#C6C2BF"
        />
    </svg>
);

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
