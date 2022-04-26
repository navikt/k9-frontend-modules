import React from 'react';
import bemUtils from '@navikt/k9-bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import Card from './Card';
import GenderIcon from './GenderIcon';
import styles from './personCard.less';

const personCardCls = bemUtils('personCard');

interface EmptyPersonCard {
    namePlaceholder: string;
}

const EmptyPersonCard: React.FC<EmptyPersonCard> = ({ namePlaceholder }) => (
    <Card>
        <div className={styles[personCardCls.element('container')]}>
            <GenderIcon />
            <Normaltekst tag="p" className={styles[personCardCls.element('namePlaceholder')]}>
                {namePlaceholder}
            </Normaltekst>
        </div>
    </Card>
);

export default EmptyPersonCard;
