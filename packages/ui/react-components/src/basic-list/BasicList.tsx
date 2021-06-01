import React from 'react';
import './basicList.less';

export interface BasicListProps {
    elements: React.ReactNode[];
}

const BasicList = ({ elements }: BasicListProps) => {
    return (
        <ul className="basicList">
            {elements.map((element, index) => (
                <li className="basicList__element" key={`element-${index}`}>
                    {element}
                </li>
            ))}
        </ul>
    );
};

export default BasicList;
