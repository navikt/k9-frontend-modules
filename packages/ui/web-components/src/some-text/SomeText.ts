import { css, customElement, LitElement, property, html } from 'lit-element';

@customElement('some-text')
export class SomeText extends LitElement {
    @property()
    text: string = '';

    render() {
        return html`<p>${this.text}</p>`;
    }
}
