import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import AddButtonComponent from './AddButton';

export default {
  title: 'React Components',
  component: AddButtonComponent,
};

const Template: Story<ComponentProps<typeof AddButtonComponent>> = (args) => (
  <>
    <AddButtonComponent onClick={() => {}} label="label"/>
  </>
);

export const AddButton = Template.bind({});
AddButton.args = {};
