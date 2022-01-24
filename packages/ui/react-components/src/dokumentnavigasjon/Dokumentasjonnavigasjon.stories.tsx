import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import DokumentnavigasjonComponent from './Dokumentnavigasjon';
import { dokumenter } from '../../.storybook/mocked-data/dokument';
import { Dokumenttype } from '../../.storybook/mocked-data/dokumenttype';

export default {
  title: 'React Components',
  component: DokumentnavigasjonComponent,
};

const dokumentLabel = {
  LEGEERKLÆRING_SYKEHUS: 'Sykehus/spesialist.',
  MEDISINSKE_OPPLYSNINGER: 'Andre med. oppl.',
  ANNET: 'Ikke med. oppl.',
  UKLASSIFISERT: 'Ikke klassifisert',
};

const Template: Story<ComponentProps<typeof DokumentnavigasjonComponent>> = () => (
    <DokumentnavigasjonComponent
        tittel="Andre dokumenter"
        dokumenttype={Dokumenttype}
        onDokumentValgt={() => {}}
        valgtDokument={dokumenter[0]}
        dokumenter={dokumenter}
        dokumentLabel={dokumentLabel}
      />
);

export const Dokumentnavigasjon = Template.bind({});
Dokumentnavigasjon.args = {};
