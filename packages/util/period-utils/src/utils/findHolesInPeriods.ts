import Period from '../types/Period';
import sortPeriodsByFomDate from './sortPeriodsByFomDate';
import { dateFromString } from '@navikt/k9-date-utils';

const checkIfPeriodsAreEdgeToEdge = (period, otherPeriod) => {
    const dayAfterPeriod = dateFromString(period.tom).add(1, 'day');
    const startOfNextPeriod = dateFromString(otherPeriod.fom);
    return dayAfterPeriod.isSame(startOfNextPeriod);
};

export const findHolesInPeriods = (periode: Period[]) => {
    const hull: Period[] = [];
    const sortedPeriods = periode.sort((p1, p2) => sortPeriodsByFomDate(p1, p2));

    sortedPeriods.forEach((period, index, array) => {
        const nextPeriod = array[index + 1];
        if (nextPeriod) {
            if (!checkIfPeriodsAreEdgeToEdge(period, nextPeriod) && !nextPeriod.includesDate(period.tom)) {
                const dayAfterPeriod = dateFromString(period.tom).add(1, 'day').format('YYYY-MM-DD');
                const dayBeforeStartOfNextPeriod = dateFromString(nextPeriod.fom)
                    .subtract(1, 'day')
                    .format('YYYY-MM-DD');
                const nyttHull = new Period(dayAfterPeriod, dayBeforeStartOfNextPeriod);
                hull.push(nyttHull);
            }
        }
    });
    return hull;
};
