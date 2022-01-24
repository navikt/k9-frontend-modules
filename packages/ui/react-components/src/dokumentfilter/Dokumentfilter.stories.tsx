import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react';
import DokumentfilterComponent from "./Dokumentfilter";
import {dokumentLabel} from '../../.storybook/mocked-data/dokumentlabel';
import {Dokumenttype} from '../../.storybook/mocked-data/dokumenttype';

export default {
  title: 'React Components',
  component: DokumentfilterComponent,
};

const Template: Story<ComponentProps<typeof DokumentfilterComponent>> = (args) => (
  <>
    <DokumentfilterComponent
      text="Type"
      className=""
      filters={[...Object.values(Dokumenttype)]}
      onFilterChange={() => {
      }}
      dokumentLabel={dokumentLabel}
      dokumenttype={Dokumenttype}
    />
  </>
);

export const Dokumentfilter = Template.bind({});
Dokumentfilter.args = {};
