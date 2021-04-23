import dayjs from './dayjsWithPluginsAttached';

const supportedFormats = ['YYYY-MM-DD'];

export default function initializeDate(dateString: string) {
    return dayjs(dateString, supportedFormats).utc(true);
}
