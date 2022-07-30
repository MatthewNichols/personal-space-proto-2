import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('main-screen')
export class MainScreen extends LitElement {

    protected render(): unknown {
        return html`<h2>Main</h2>`;
    }

}