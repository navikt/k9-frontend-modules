import React from 'react';
import './linkButton.less';

export interface LinkButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

const LinkButton = ({ className, onClick, children }: LinkButtonProps) => {
    const cls = `${className || ''} linkButton`;
    return (
        <button type="button" className={cls} onClick={onClick}>
            {children}
        </button>
    );
};

export default LinkButton;
