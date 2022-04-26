import React from 'react';
import bemUtils from '@navikt/k9-bem-utils';
import styles from './card.less';

const cardCls = bemUtils('card');

interface CardProps {
    children: React.ReactNode;
    active?: boolean;
}

const Card = ({ children, active }: CardProps): JSX.Element => {
    return (
        <div
            className={
                active ? `${styles[cardCls.block]} ${styles[cardCls.modifier('active')]}` : styles[cardCls.block]
            }
        >
            {children}
        </div>
    );
};

export default Card;
