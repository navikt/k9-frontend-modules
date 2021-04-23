import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Period } from '@navikt/period-utils';
import NavigationWithDetailView from './navigation-with-detail-view/NavigationWithDetailView';
import DetailView from './detail-view/DetailView';
import Vurderingsnavigasjon from './vurderingsnavigasjon/Vurderingsnavigasjon';
import Vurderingsresultat from './vurderingsnavigasjon/Vurderingsresultat';

export default {
    title: 'React Components',
    component: NavigationWithDetailView,
};

const Template: Story<ComponentProps<typeof NavigationWithDetailView>> = (
    args
) => (
    <NavigationWithDetailView
        {...args}
        navigationSection={() => (
            <Vurderingsnavigasjon
                onVurderingValgt={() => console.log('Vurdering valgt')}
                onNyVurderingClick={() => console.log('Ny vurdering valgt')}
                vurderingselementer={[
                    {
                        id: '1',
                        endretIDenneBehandlingen: true,
                        erInnleggelsesperiode: false,
                        gjelderForAnnenPart: true,
                        gjelderForSøker: true,
                        links: [],
                        periode: new Period('2028-01-01', '2028-01-05'),
                        resultat: Vurderingsresultat.IKKE_OPPFYLT,
                    },
                    {
                        id: '2',
                        endretIDenneBehandlingen: true,
                        erInnleggelsesperiode: false,
                        gjelderForAnnenPart: true,
                        gjelderForSøker: true,
                        links: [],
                        periode: new Period('2028-01-06', '2028-01-31'),
                        resultat: Vurderingsresultat.OPPFYLT,
                    },
                ]}
                visOpprettVurderingKnapp={true}
                visRadForNyVurdering={true}
                visParterLabel={true}
                resterendeVurderingsperioder={[
                    new Period('2028-02-01', '2028-02-05'),
                ]}
            />
        )}
        detailSection={() => (
            <DetailView title="Fancy tittel">
                <p>Her viser vi noen fancy detaljer</p>
            </DetailView>
        )}
    />
);

export const NavigationWithDetailStory = Template.bind({});
NavigationWithDetailStory.args = {};
