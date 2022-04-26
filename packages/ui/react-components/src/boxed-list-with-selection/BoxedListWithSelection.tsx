import React from 'react';
import bem from '@navikt/k9-bem-utils';
import BoxedList from '../boxed-list/BoxedList';
import { Normaltekst } from 'nav-frontend-typografi';
import styles from './boxedListWithSelection.less';

interface ListItemProps {
    name: string;
    selected?: boolean;
}

interface BoxedListWithSelectionProps {
    items: ListItemProps[];
    onClick?: (index: number, e: React.SyntheticEvent) => void;
}

const boxedListWithSelectionItemCls = bem('boxedList__selectItem');

const BoxedListWithSelection: React.FunctionComponent<BoxedListWithSelectionProps> = ({ items, onClick }) => (
    <BoxedList>
        {items.map(({ name, selected }, index) => (
            <li
                className={
                    selected
                        ? `${styles[boxedListWithSelectionItemCls.block]} ${
                              styles[boxedListWithSelectionItemCls.modifier('selected')]
                          }`
                        : styles[boxedListWithSelectionItemCls.block]
                }
                key={`${name}_${index}`}
            >
                <button
                    className={styles[boxedListWithSelectionItemCls.element('button')]}
                    aria-current={selected}
                    type="button"
                    onClick={(e) => onClick(index, e)}
                >
                    <Normaltekst tag="span">{name}</Normaltekst>
                </button>
            </li>
        ))}
    </BoxedList>
);

export default BoxedListWithSelection;
