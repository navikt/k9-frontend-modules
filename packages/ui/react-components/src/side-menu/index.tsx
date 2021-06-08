import bem from '@navikt/k9-bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import './indexStyles';
import classnames from 'classnames';
import MenuLink from './MenuLink';

const sideMenuCls = bem('side-menu');

export interface Link {
    label: string;
    active?: boolean;
    iconSrc?: string;
    iconAltText?: string;
}

export type ThemeProp = 'arrow';

interface SideMenuProps {
    heading?: string;
    links: Link[];
    onClick: (index: number) => void;
    theme?: ThemeProp;
}

const SideMenu = ({ links, heading, onClick, theme }: SideMenuProps): JSX.Element => {
    const sideMenuRootClassnames = classnames(sideMenuCls.block, {
        [sideMenuCls.modifier(theme)]: theme,
    });
    return (
        <div className={sideMenuRootClassnames}>
            <nav className={sideMenuCls.element('container')}>
                {heading && <Normaltekst className={sideMenuCls.element('heading')}>{heading}</Normaltekst>}
                <ul className={sideMenuCls.element('link-list')}>
                    {links.map(({ label, active, iconSrc, iconAltText }, index) => (
                        <MenuLink
                            key={label.split(' ').join('')}
                            label={label}
                            active={active}
                            onClick={() => onClick(index)}
                            iconSrc={iconSrc}
                            iconAltText={iconAltText}
                            theme={theme}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default SideMenu;
