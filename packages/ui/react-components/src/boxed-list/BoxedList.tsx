import React from 'react';
import './boxedList.less';

interface BoxedListProps {
    children: React.ReactNode;
}

const BoxedList: React.FunctionComponent<BoxedListProps> = ({ children }) => <ul className="boxedList">{children}</ul>;

export default BoxedList;
