import dayjsWithPluginsAttached from './dayjsWithPluginsAttached';

const today = dayjsWithPluginsAttached().utc(true).startOf('day');
const tomorrow = today.add(1, 'day').startOf('day');

export default {
    today,
    tomorrow,
};
