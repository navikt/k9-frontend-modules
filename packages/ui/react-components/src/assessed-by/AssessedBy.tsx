import React from 'react';
import { CaseworkerFilled } from '@navikt/ds-icons';
import { prettifyDateString } from '@navikt/k9-date-utils';
import './assessedBy.less';

interface IAssessedByProps {
    name?: string;
    date?: string;
}

export default function AssessedBy({ name, date }: IAssessedByProps) {
    if (!name) {
        return null;
    }
    return (
        <div className={'assessed-by'}>
            <CaseworkerFilled height="1.5em" width="1.5em" />
            <span>{`Vurdering av ${name ? name : ''}${date ? `, ${prettifyDateString(date)}` : ''}`}</span>
        </div>
    );
}
