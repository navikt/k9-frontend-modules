import * as React from 'react';
import bemUtils from '@navikt/k9-bem-utils';
import Card from './Card';
import OnePersonOutlineGray from '../icons/OnePersonOutlineGray';
import { Normaltekst } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';

const personCardCls = bemUtils('personCard');

interface AnnenPartCardProps {
    url: string;
    fodselsnummer: string;
    name: string;
}

const AnnenPartCard = ({ url, fodselsnummer, name }: AnnenPartCardProps) => (
    <Card>
        <div className={personCardCls.element('name-gender-container')}>
            <OnePersonOutlineGray classname={personCardCls.element('other-part-icon')} />
            <Normaltekst className={personCardCls.element('other-part-description')}>Andre parter i saken:</Normaltekst>

            <Lenke className={personCardCls.element('selector')} href={url} target="_blank">
                <Normaltekst tag="span" className={personCardCls.element('name')}>
                    {name}
                </Normaltekst>
            </Lenke>
        </div>
        <Normaltekst tag="span">/</Normaltekst>
        <div className={personCardCls.element('container')}>
            <Normaltekst>{fodselsnummer}</Normaltekst>
        </div>
    </Card>
);

export default AnnenPartCard;
