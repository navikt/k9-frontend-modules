import * as React from 'react';
import './menuStyles';
import bem from '@navikt/nap-bem-utils';

const menuImgPath = require('./assets/images/annet.svg') as string;

const menuCls = bem('menu');

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
            <img src={menuImgPath} alt="" className={menuCls.element('icon')} />
        </button>
    );
};

export default Menu;
