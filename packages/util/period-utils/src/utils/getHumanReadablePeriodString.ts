import Period from '../types/Period';

const getHumanReadablePeriodString = (periods: Period[]): string => {
    if (periods.length === 1) {
        return periods[0].prettifyPeriod();
    }

    let periodString = '';
    periods.forEach((period, index) => {
        const prettyPeriod = period.prettifyPeriod();
        if (index === 0) {
            periodString = prettyPeriod;
        } else if (index === periods.length - 1) {
            periodString = `${periodString} og ${prettyPeriod}`;
        } else {
            periodString = `${periodString}, ${prettyPeriod}`;
        }
    });

    return periodString;
};

export default getHumanReadablePeriodString;
