import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import NavigationWithDetailView from './../navigation-with-detail-view/NavigationWithDetailView';
import DetailView from './../detail-view/DetailView';

export default {
    title: 'React Components',
    component: NavigationWithDetailView,
};

const Template: Story<ComponentProps<typeof NavigationWithDetailView>> = (args) => (
    <NavigationWithDetailView
        {...args}
        navigationSection={() => <p>Navigasjon</p>}
        detailSection={() => (
            <DetailView title="Tittel">
                <p>Detaljer</p>
            </DetailView>
        )}
    />
);

export const NavigationWithDetail = Template.bind({});
NavigationWithDetail.args = {};
