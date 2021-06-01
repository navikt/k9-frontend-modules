import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import LabelledContentComponent from './../labelled-content/LabelledContent';

export default {
    title: 'React Components',
    component: LabelledContentComponent,
};

const Template: Story<ComponentProps<typeof LabelledContentComponent>> = (args) => (
    <LabelledContentComponent label="Label" content="Content" />
);

export const LabelledContent = Template.bind({});
LabelledContent.args = {};
