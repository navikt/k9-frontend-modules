import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import Form from './Form';

export default {
    title: 'React Components',
    component: Form,
};

const Template: Story<ComponentProps<typeof Form>> = (args) => (
    <Form {...args} buttonLabel="Lagre">
        <p>Et form</p>
    </Form>
);

export const FormComponent = Template.bind({});
FormComponent.args = {};
