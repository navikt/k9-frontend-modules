import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import PersonCardComponent, { Gender } from './PersonCard';

export default {
    title: 'React Components',
    component: PersonCardComponent,
};

const Template: Story<ComponentProps<typeof PersonCardComponent>> = (args) => (
    <PersonCardComponent
        fodselsnummer="123"
        gender="unknown"
        name="Test Personsen"
        renderMenuContent={(): JSX.Element => (
            <div>
                <p>Hei</p>
            </div>
        )}
    />
);

export const PersonCard = Template.bind({});
PersonCard.args = {};
