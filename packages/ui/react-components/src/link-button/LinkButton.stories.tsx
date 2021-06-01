import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import LinkButtonComponent from './../link-button/LinkButton';

export default {
    title: 'React Components',
    component: LinkButtonComponent,
};

const Template: Story<ComponentProps<typeof LinkButtonComponent>> = (args) => (
    <LinkButtonComponent onClick={() => console.log('I was clicked')} href="#">
        Click me
    </LinkButtonComponent>
);

export const LinkButton = Template.bind({});
LinkButton.args = {};
