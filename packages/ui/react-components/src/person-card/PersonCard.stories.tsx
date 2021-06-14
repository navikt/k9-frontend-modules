import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import Box, { Margin } from '../box/Box';
import EmptyPersonCard from './EmptyPersonCard';
import PersonCardComponent from './PersonCard';
import OtherPartCard from './OtherPartCard';

export default {
    title: 'React Components',
    component: PersonCardComponent,
};

const Template: Story<ComponentProps<typeof PersonCardComponent>> = (args) => (
    <>
        <Box marginBottom={Margin.xLarge}>
            <PersonCardComponent
                name="Ekstremt Langt Navn Navnesen For Å Teste Hva Som Skjer Med Brytningen"
                gender={'female' as const}
                fodselsnummer="12345612345"
                url="#"
                isActive
                renderMenuContent={(): JSX.Element => (
                    <div>
                        <p>Hei</p>
                    </div>
                )}
            />
        </Box>
        <Box marginBottom={Margin.xLarge}>
            <PersonCardComponent name="Pest Tersonsen" gender={'male' as const} fodselsnummer="12345612345" url="#" />
        </Box>
        <Box marginBottom={Margin.xLarge}>
            <PersonCardComponent
                name="Pest Tersonsen"
                gender={'unknown' as const}
                fodselsnummer="12345612346"
                renderLabelContent={() => (
                    <div
                        style={{
                            width: '70px',
                            height: '24px',
                            background: 'rgb(198, 194, 191)',
                            borderRadius: '4px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'rgb(62, 56, 50)',
                            fontFamily: 'SourceSansPro-Regular',
                            fontSize: '14px',
                            fontWeight: 'normal',
                            lineHeight: '24px',
                        }}
                    >
                        Under 18
                    </div>
                )}
            />
        </Box>
        <Box marginBottom={Margin.xLarge}>
            <EmptyPersonCard namePlaceholder="Ukjent navn, mangler norsk id-nr" />
        </Box>
        <Box marginBottom={Margin.xLarge}>
            <OtherPartCard name="Per Parker" fodselsnummer="12345612345" url="#" />
        </Box>
    </>
);

export const PersonCard = Template.bind({});
PersonCard.args = {};
