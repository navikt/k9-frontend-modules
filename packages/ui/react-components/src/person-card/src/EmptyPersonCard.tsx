import bem from '@navikt/k9-bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import Card from './Card';
import GenderIcon from './GenderIcon';

const personCardCls = bem('person-card');

interface EmptyPersonCard {
    namePlaceholder: string;
}

const EmptyPersonCard = ({ namePlaceholder }) => (
    <Card>
        <div className={personCardCls.element('container')}>
            <GenderIcon />
            <Normaltekst tag="p" className={personCardCls.element('namePlaceholder')}>
                {namePlaceholder}
            </Normaltekst>
        </div>
    </Card>
);

export default EmptyPersonCard;
