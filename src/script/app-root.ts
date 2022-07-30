import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('app-root')
export class AppRoot extends LitElement {

    @state()
    showLogin: Boolean = true;

    @state()
    showMain: Boolean = false;

    protected render(): TemplateResult {
        return html`
        <div id="header">
            <h1>Personal VR Space Prototype</h1>
        </div>
        
        <login-screen ?hidden=${!this.showLogin}></login-screen>
        <main-screen ?hidden=${!this.showMain}></main-screen>
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