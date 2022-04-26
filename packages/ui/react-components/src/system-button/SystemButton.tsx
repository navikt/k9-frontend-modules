import bem from '@navikt/k9-bem-utils';
import React from 'react';
import { Systemerknapp } from 'nav-frontend-ikonknapper';
import styles from './systemButton.less';

const systemsCls = bem('systems');

export interface SystemButtonProps {
    onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
    isToggled?: boolean;
}

const SystemButton: React.FunctionComponent<SystemButtonProps> = ({ onClick, isToggled }) => {
    return (
        <div className={styles[systemsCls.block]}>
            <Systemerknapp
                onClick={onClick}
                className={styles[systemsCls.element('button')]}
                aria-haspopup="dialog"
                aria-expanded={isToggled}
            />
        </div>
    );
};

export default SystemButton;
