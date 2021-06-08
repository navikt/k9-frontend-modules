import React from 'react';
import bem from '@navikt/k9-bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import BoxedList from './../boxed-list';
import './list.less';

interface ListItemProps {
    /** Display name for link */
    name: string;
    /** Url for link */
    href: string;
    /** Whether to open link in a new window */
    isExternal?: boolean;
}

interface BoxedListWithLinksProps {
    /** Array of links */
    items: ListItemProps[];
    /** Onclick handler */
    onClick?: (index: number, e: React.SyntheticEvent) => void;
}

const listItemCls = bem('boxedList__item');

/** Bordered list with links */
export const BoxedListWithLinks: React.FunctionComponent<BoxedListWithLinksProps> = ({
    items,
    onClick,
}: BoxedListWithLinksProps) => (
    <BoxedList>
        {items.map(({ name, href, isExternal }, index) => (
            <li className={listItemCls.block} key={href}>
                <a
                    href={href}
                    className={listItemCls.element('anchor')}
                    target={isExternal ? '_blank' : ''}
                    rel={isExternal ? 'noopener' : ''}
                    onClick={(e) => {
                        if (onClick) onClick(index, e);
                    }}
                >
                    <Normaltekst>{name}</Normaltekst>
                </a>
            </li>
        ))}
    </BoxedList>
);

export default BoxedListWithLinks;
