import Period from '../types/Period';

const prettifyPeriodList = (periods: Period[]) => periods.map((period) => period.prettifyPeriod()).join(', ');

export default prettifyPeriodList;
