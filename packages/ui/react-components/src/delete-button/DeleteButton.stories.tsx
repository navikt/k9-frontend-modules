import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import DeleteButtonComponent from './DeleteButton';

export default {
  title: 'React Components',
  component: DeleteButtonComponent,
};

const Template: Story<ComponentProps<typeof DeleteButtonComponent>> = () => (
  <>
    <DeleteButtonComponent onClick={() => {}}/>
  </>
);

export const DeleteButton = Template.bind({});
DeleteButton.args = {};
