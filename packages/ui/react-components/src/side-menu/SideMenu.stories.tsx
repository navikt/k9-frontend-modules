import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import StatefulSideMenuComponent from './StatefulSideMenu';

export default {
    title: 'React Components',
    component: StatefulSideMenuComponent,
};

const Template: Story<ComponentProps<typeof StatefulSideMenuComponent>> = () => (
    <StatefulSideMenuComponent
        heading="Dette er en test"
        links={[
            {
                label: 'en link',
                active: true,
            },
            {
                label: 'en link til',
            },
        ]}
        onClick={() => null}
    />
);

export const StatefulSideMenu = Template.bind({});
StatefulSideMenu.args = {};
