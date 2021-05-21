import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import AutocompleteComponent from './Autocomplete';

export default {
    title: 'React Components',
    component: AutocompleteComponent,
};

const AutocompleteTemplate: Story<ComponentProps<typeof AutocompleteComponent>> = () => (
    <AutocompleteComponent
        value="Verdi"
        onChange={(v) => v}
        ariaLabel="ariaLabel"
        id="autocompleteId"
        placeholder=""
        suggestions={[{ key: 'testItem', value: 'Test Item' }]}
        onSelect={() => console.log('Selected')}
    />
);

export const Autocomplete = AutocompleteTemplate.bind({});
Autocomplete.args = {};
