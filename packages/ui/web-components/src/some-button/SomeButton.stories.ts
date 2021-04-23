import { html } from 'lit-html';
import './SomeButton';

export default {
    title: 'Web Components/Some Button',
};

const Template = ({ onClick, label }) => html`<some-button
    .onClick=${onClick}
    .label=${label}
></some-button>`;

export const SomeButton = Template.bind({});

SomeButton.args = {
    onClick: () => console.log('Hello World!'),
    label: 'Shiny Button',
};
