import { css, customElement, LitElement, property, html } from 'lit-element';

@customElement('some-button')
export class SomeButton extends LitElement {
    @property()
    label: string = '';

    @property()
    _onClick: () => void = null;

    render() {
        return html`<button @click=${this._onClick}>
            ${this.label}
        </button>`;
    }
}
