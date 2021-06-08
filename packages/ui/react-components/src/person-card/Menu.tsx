import * as React from 'react';
import bemUtils from '@navikt/k9-bem-utils';
import OtherIcon from './icons/Other';
import './menu.less';

const menuCls = bemUtils('menu');

interface MenuProps {
    onClick: () => void;
    isOpen: boolean;
}

const Menu = ({ onClick, isOpen }: MenuProps): JSX.Element => {
    return (
        <button
            className={menuCls.block}
            type="button"
            onClick={onClick}
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            aria-label="Meny"
        >
            <OtherIcon />
        </button>
    );
};

export default Menu;
