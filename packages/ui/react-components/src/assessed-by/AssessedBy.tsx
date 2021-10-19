import React from 'react';
import { CaseworkerFilled } from '@navikt/ds-icons';
import {prettifyDateString} from '@navikt/k9-date-utils'
import './assessedBy.less';

interface IAssessedByProps {
    ident?: string;
    dato?: string;
}

export default function AssessedBy({ ident, dato }: IAssessedByProps) {
    const navn = undefined;
    if (!ident) {
        return null;
    }
    //2021-10-19T13:23:44.995
    return (
        <div className={'assessed-by'}>
            <CaseworkerFilled height="1.5em" width="1.5em" />
            <span>{`Vurdering av ${navn ? navn : ident}${dato ? `, ${prettifyDateString(dato)}` : ''}`}</span>
        </div>
    );
}
