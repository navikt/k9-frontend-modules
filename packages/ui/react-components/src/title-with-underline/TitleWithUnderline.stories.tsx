import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import TitleWithUnderlineComponent from './TitleWithUnderline';

export default {
    title: 'React Components',
    component: TitleWithUnderlineComponent,
};

const Template: Story<ComponentProps<typeof TitleWithUnderlineComponent>> = (args) => (
    <TitleWithUnderlineComponent>Title</TitleWithUnderlineComponent>
);

export const TitleWithUnderline = Template.bind({});
TitleWithUnderline.args = {};
