import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import ExpandablePanelComponent from './ExpandablePanel';

export default {
    title: 'React Components',
    component: ExpandablePanelComponent,
};

const Template: Story<ComponentProps<typeof ExpandablePanelComponent>> = (args) => (
    <ExpandablePanelComponent renderHeader={() => null} isOpen onClick={() => null}>
        <p>Dette er en test</p>
    </ExpandablePanelComponent>
);

export const ExpandablePanel = Template.bind({});
ExpandablePanel.args = {};
