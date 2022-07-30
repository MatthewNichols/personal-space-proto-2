import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-root')
export class AppRoot extends LitElement {
    protected render(): TemplateResult {
        return html`
        <div id="header">
            <h1>Personal VR Space Prototype</h1>
        </div>
        
        <login-screen></login-screen>
        `;
    };

    static styles = css`
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    
        #header {
            h1 {
                margin: 0;
            }
        }
    `;
}