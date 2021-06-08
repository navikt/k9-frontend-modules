import bem from '@navikt/k9-bem-utils';
import * as React from 'react';
import { Systemerknapp } from 'nav-frontend-ikonknapper';
import './systemButton.less';

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
