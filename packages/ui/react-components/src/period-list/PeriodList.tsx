import React from 'react';

import { Period, sortPeriodsByFomDate } from '@navikt/k9-period-utils';
import { Heading, Label, BodyShort } from '@navikt/ds-react';

import CalendarIcon from '../icons/CalendarIcon';
import './periodList.less';

type Item = {
    label: string;
    value: string;
};
type Periode = {
    fom: string;
    tom: string;
    items: Item[];
};

type OwnProps = {
    perioder: Periode[];
    tittel: string;
    customRenderFunc?: (items: { label: string; value: string }[]) => JSX.Element | null;
};
const PeriodList = ({ perioder, tittel, customRenderFunc }: OwnProps) => {
    if (!perioder || !Array.isArray(perioder)) {
        return null;
    }

    return (
        <>
            {tittel && (
                <Heading spacing size="xsmall" level="4">
                    {tittel}
                </Heading>
            )}
            <ul className={'periodList'}>
                {perioder
                    .map((periode) => ({ period: new Period(periode.fom, periode.tom), items: periode.items }))
                    .sort((periode1, periode2) => sortPeriodsByFomDate(periode1.period, periode2.period))
                    .map((periode) => {
                        const { period, items = [] } = periode;
                        return (
                            <li className={'element'} key={period.fom}>
                                <div className={'title'}>
                                    <CalendarIcon />
                                    <span className={'period'}>{period.prettifyPeriod()}</span>
                                </div>
                                {!customRenderFunc ? (
                                    <div className={'content'}>
                                        {items.map((item) => (
                                            <div className={'item'}>
                                                <Label size="small">{item.label}</Label>
                                                <BodyShort size="small">{item.value}</BodyShort>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    customRenderFunc(items)
                                )}
                            </li>
                        );
                    })}
            </ul>
        </>
    );
};

export default PeriodList;
