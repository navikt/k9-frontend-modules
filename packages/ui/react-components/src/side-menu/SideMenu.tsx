import bem from '@navikt/k9-bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import classnames from 'classnames';
import MenuLink from './MenuLink';
import styles from './sideMenu.less';

const sideMenuCls = bem('sideMenu');

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
    const sideMenuRootClassnames = classnames(styles[sideMenuCls.block], {
        [styles[sideMenuCls.modifier(theme)]]: theme,
    });
    return (
        <div className={sideMenuRootClassnames}>
            <nav className={styles[sideMenuCls.element('container')]}>
                {heading && <Normaltekst className={styles[sideMenuCls.element('heading')]}>{heading}</Normaltekst>}
                <ul className={styles[sideMenuCls.element('link-list')]}>
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
