import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import SystemButtonComponent from './SystemButton';

export default {
    title: 'React Components',
    component: SystemButtonComponent,
};

const Template: Story<ComponentProps<typeof SystemButtonComponent>> = () => (
    <SystemButtonComponent onClick={() => null} isToggled />
);

export const SystemButton = Template.bind({});
SystemButton.args = {};
