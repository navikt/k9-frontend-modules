import { Dayjs } from 'dayjs';

export default function dateSorter(date1: Dayjs, date2: Dayjs) {
    if (date1.isBefore(date2)) {
        return -1;
    }
    if (date2.isBefore(date1)) {
        return 1;
    }
    return 0;
}
