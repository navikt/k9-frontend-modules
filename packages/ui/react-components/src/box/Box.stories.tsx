import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import Box, { Margin } from './Box';

export default {
    title: 'React Components',
    component: Box,
};

const Template: Story<ComponentProps<typeof Box>> = (args) => (
    <Box {...args} marginTop={Margin.xxLarge} marginBottom={Margin.large}>
        <p>Dette er en box</p>
    </Box>
);

export const BoxComponent = Template.bind({});
BoxComponent.args = {};
