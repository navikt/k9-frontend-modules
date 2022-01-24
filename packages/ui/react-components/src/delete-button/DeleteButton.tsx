import * as React from 'react';
import './deleteButton.less';
import { BucketIcon } from '../../index';

interface DeleteButtonProps {
    onClick: () => void;
}

const DeleteButton = ({ onClick }: DeleteButtonProps): JSX.Element => (
    <div className="deleteButton__container">
        <button className="deleteButton__button" type="button" onClick={onClick} aria-label="Fjern periode">
            <BucketIcon />
        </button>
    </div>
);

export default DeleteButton;
