import dayjsWithPluginsAttached from './dayjsWithPluginsAttached';

const today = dayjsWithPluginsAttached();
const tomorrow = today.add(1, 'day');

export default {
    today,
    tomorrow,
};
