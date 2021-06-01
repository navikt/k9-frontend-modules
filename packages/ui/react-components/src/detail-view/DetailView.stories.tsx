import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import DetailViewComponent from './../detail-view/DetailView';

export default {
    title: 'React Components',
    component: DetailViewComponent,
};

const Template: Story<ComponentProps<typeof DetailViewComponent>> = (args) => (
    <DetailViewComponent title="Tittel">
        <p>Detaljer</p>
    </DetailViewComponent>
);

export const DetailView = Template.bind({});
DetailView.args = {};
