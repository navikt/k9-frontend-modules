import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import InfoPanelComponent from './../info-panel/InfoPanel';

export default {
    title: 'React Components',
    component: InfoPanelComponent,
};

const Template: Story<ComponentProps<typeof InfoPanelComponent>> = (args) => (
    <>
        <InfoPanelComponent type="success">En type informasjon</InfoPanelComponent>
        <InfoPanelComponent type="warning">En annen type informasjon</InfoPanelComponent>
    </>
);

export const InfoPanel = Template.bind({});
InfoPanel.args = {};
