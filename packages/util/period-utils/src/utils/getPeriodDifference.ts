import { Dayjs } from 'dayjs';
import {
    makeArrayWithoutDuplicates,
    getArrayDifference,
} from '@navikt/array-utils';
import {
    initializeDate,
    isSameOrBefore,
    isDayAfter,
    dateSorter,
} from '@navikt/date-utils';
import Period from './../types/Period';

export function getPeriodAsListOfDays(period: Period): Dayjs[] {
    const fom = initializeDate(period.fom);
    const tom = initializeDate(period.tom);

    const list = [];
    for (
        let currentDate = fom;
        isSameOrBefore(currentDate, tom);
        currentDate = currentDate.add(1, 'day')
    ) {
        list.push(currentDate);
    }

    return list;
}

export function getPeriodsAsListOfDays(period: Period[]) {
    const days = period.map(getPeriodAsListOfDays).flat();
    return makeArrayWithoutDuplicates(days);
}

function getDaySequencesAsListOfPeriods(daySequences: string[][]): Period[] {
    return daySequences.map((daySequence) => {
        const firstDay = daySequence[0];
        const lastDay = daySequence[daySequence.length - 1];
        return new Period(firstDay, lastDay);
    });
}

// assumes no duplicates & sorted by day
export function convertListOfDaysToPeriods(days: string[]): Period[] {
    if (days.length === 0) {
        return [];
    }

    const daySplit = [];
    let currentSplit = [];
    for (let i = 0; i < days.length; i++) {
        const currentSplitCount = currentSplit.length;
        if (currentSplitCount === 0) {
            currentSplit.push(days[i]);
        } else {
            const currentDay = initializeDate(days[i]);
            const previousDay = initializeDate(
                currentSplit[currentSplitCount - 1]
            );
            if (isDayAfter(previousDay, currentDay)) {
                currentSplit.push(days[i]);
            } else {
                daySplit.push(currentSplit);
                currentSplit = [days[i]];
            }
        }
    }
    daySplit.push(currentSplit);

    return getDaySequencesAsListOfPeriods(daySplit);
}

function periodDifference(basePeriods: Period[], periodsToExclude: Period[]) {
    const baseListOfDays = getPeriodsAsListOfDays(basePeriods).sort(dateSorter);
    const daysToExclude = getPeriodsAsListOfDays(periodsToExclude).sort(
        dateSorter
    );
    const daysToInclude = getArrayDifference(baseListOfDays, daysToExclude);
    return convertListOfDaysToPeriods(daysToInclude);
}

export default periodDifference;
