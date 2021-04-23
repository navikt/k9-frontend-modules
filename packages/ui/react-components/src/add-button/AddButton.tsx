import React from 'react';
import PlusIcon from '../icons/PlusIcon';
import './addButton.less';

interface AddButtonProps {
    onClick: () => void;
    label: string;
    id?: string;
    className?: string;
    noIcon?: boolean;
}

const AddButton = ({
    className,
    label,
    onClick,
    id,
    noIcon,
}: AddButtonProps) => (
    <button
        className={`addButton ${className || ''}`}
        type="button"
        onClick={onClick}
        id={id || ''}
    >
        {!noIcon && <PlusIcon />}
        <span className="addButton__text">{label}</span>
    </button>
);

export default AddButton;
