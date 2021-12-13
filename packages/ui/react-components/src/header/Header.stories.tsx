import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import HeaderComponent from './Header';

export default {
    title: 'React Components',
    component: HeaderComponent,
};

const Template: Story<ComponentProps<typeof HeaderComponent>> = (args) => (
    <>
        <HeaderComponent title={'hallo'} />
    </>
);

export const Header = Template.bind({});
Header.args = {};
