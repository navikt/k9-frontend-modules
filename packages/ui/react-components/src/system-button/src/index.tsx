import * as React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Systemerknapp } from 'nav-frontend-ikonknapper';
import bem from '@navikt/nap-bem-utils';
import './systemButtonStyles';

const systemsCls = bem('systems');

interface SystemButtonProps {
    onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
    isToggled?: boolean;
}

const SystemButton: React.FunctionComponent<SystemButtonProps> = ({ onClick, isToggled }) => {
    return (
        <div className={systemsCls.block}>
            <Systemerknapp
                onClick={onClick}
                className={systemsCls.element('button')}
                aria-haspopup="dialog"
                aria-expanded={isToggled}
            />
        </div>
    );
};

export default SystemButton;
