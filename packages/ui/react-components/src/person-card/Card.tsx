import * as React from 'react';
import { bemUtils } from '@navikt/k9-bem-utils';
import './cardStyles.less';

const cardCls = bemUtils('card');

interface CardProps {
    children: React.ReactNode;
    active?: boolean;
}

const Card = ({ children, active }: CardProps): JSX.Element => {
    return <div className={active ? `${cardCls.block} ${cardCls.modifier('active')}` : cardCls.block}>{children}</div>;
};

export default Card;
