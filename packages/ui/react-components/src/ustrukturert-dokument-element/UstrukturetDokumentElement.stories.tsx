import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import UstrukturertDokumentElementComponent from './UstrukturertDokumentElement';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { dokumenter } from '../../.storybook/mocked-data/dokument';
dayjs.extend(utc);

export default {
    title: 'React Components',
    component: UstrukturertDokumentElementComponent,
};

const Template: Story<ComponentProps<typeof UstrukturertDokumentElementComponent>> = (args) => (
    <>
        <UstrukturertDokumentElementComponent dokument={dokumenter[0]}/>
    </>
);

export const UstrukturertDokumentElement = Template.bind({});
UstrukturertDokumentElement.args = {};