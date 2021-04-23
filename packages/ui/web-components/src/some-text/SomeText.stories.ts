import { html } from 'lit-html';
import './SomeText';

export default {
    title: 'Web Components/Some Text',
};

const Template = ({ text }) => html`<some-text .text=${text}></some-text>`;

export const SomeText = Template.bind({});

SomeText.args = {
    text: 'Shiny Text',
};
