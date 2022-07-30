import { DefaultViewer } from "@babylonjs/viewer";
import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement("avatar-display")
export class AvatarDisplay extends LitElement {

    @property({ type: Object })
    avatarData: AvatarData | null = null;

    @query("babylon")
    babylonEl!: HTMLElement;

    protected render(): unknown {
        return this.avatarData ? html`<babylon id="${this.avatarData.id}-model"></babylon>` : null;
    }

    updated(): void {
        if (this.avatarData) {
            new DefaultViewer(this.babylonEl, { 
                model: { url: this.avatarData.meshFile }, extends: "minimal"
            })    
        }
        
    }
}