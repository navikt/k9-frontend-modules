import React from 'react';
import ContentWithTooltip from './ContentWithTooltip';

export default {
    title: 'React Components',
    component: ContentWithTooltip,
};

export const Tooltip = () => (
    <ContentWithTooltip tooltipText="Tooltip Tooltipsen">
        <button>Knapp med tooltip</button>
    </ContentWithTooltip>
);
