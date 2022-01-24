import React, { forwardRef, Ref } from 'react';
import './addButton.less';
import { PlusIcon } from '../../index';

interface AddButtonProps {
    onClick: () => void;
    label: string;
    id?: string;
    className?: string;
    noIcon?: boolean;
    ariaLabel?: string;
}

const AddButton = forwardRef(
  (
    {className, label, onClick, id, noIcon, ariaLabel}: AddButtonProps,
    ref?: Ref<HTMLButtonElement>
  ): JSX.Element => (
    <button
      className={`addButton ${className || ''}`}
      type="button"
      onClick={onClick}
      id={id || ''}
      aria-label={ariaLabel}
      ref={ref}
    >
        {!noIcon && <PlusIcon/>}
        <span className="addButton__text">{label}</span>
    </button>
  )
);

export default AddButton;
