import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import BasicListComponent from './BasicList';

export default {
    title: 'React Components',
    component: BasicListComponent,
};

const Template: Story<ComponentProps<typeof BasicListComponent>> = (args) => (
    <BasicListComponent elements={[<p>Dette er et listeelement</p>, <p>Dette er et annet listeelmeent</p>]} />
);

export const BasicList = Template.bind({});
BasicList.args = {};
