import React from 'react';

import { Period, sortPeriodsByFomDate } from '@navikt/k9-period-utils';
import { Heading, Label, BodyShort } from '@navikt/ds-react';

import CalendarIcon from '../icons/CalendarIcon';
import styles from './periodList.less';

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
            <ul className={styles.periodList}>
                {perioder
                    .map((periode) => ({ period: new Period(periode.fom, periode.tom), items: periode.items }))
                    .sort((periode1, periode2) => sortPeriodsByFomDate(periode1.period, periode2.period))
                    .map((periode) => {
                        const { period, items = [] } = periode;
                        return (
                            <li className={styles.element} key={period.fom}>
                                <div className={styles.title}>
                                    <CalendarIcon />
                                    <span className={styles.period}>{period.prettifyPeriod()}</span>
                                </div>
                                {!customRenderFunc ? (
                                    <div className={styles.content}>
                                        {items.map((item) => (
                                            <div className={styles.item} key={item.label}>
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
