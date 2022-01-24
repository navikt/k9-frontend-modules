import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import StrukturertDokumentElementComponent from './StrukturertDokumentElement';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { dokumenter } from '../../.storybook/mocked-data/dokument';

dayjs.extend(utc);

export default {
  title: 'React Components',
  component: StrukturertDokumentElementComponent,
};


const Template: Story<ComponentProps<typeof StrukturertDokumentElementComponent>> = (args) => (
  <>
    <StrukturertDokumentElementComponent dokument={dokumenter[0]} dokumentLabel={{"LEGEERKLÆRING_SYKEHUS": "Titel"}}/>
  </>
);

export const StrukturertDokumentElement = Template.bind({});
StrukturertDokumentElement.args = {};