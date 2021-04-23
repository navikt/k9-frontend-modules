import { Dayjs } from 'dayjs';

const prettyDateFormat = 'DD.MM.YYYY';
export default function prettifyDate(date: Dayjs) {
    return date.format(prettyDateFormat);
}
