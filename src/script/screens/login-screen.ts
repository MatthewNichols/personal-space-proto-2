import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getAvatarData } from "../communications/config-data";
import { login } from "../communications/communication-composer";

@customElement('login-screen')
export class LoginScreen extends LitElement {
  
  @property({ type: Array })
  avatars: AvatarData[] = [];

  
  avatarTemplate(avatar: AvatarData) {
    const avatarClickHandler = async (avatar: AvatarData) => {
      console.log("click", avatar);
      await login(avatar.id)
    }
  
    return html`<li>
      <button @click=${ () => avatarClickHandler(avatar) }>
        ${avatar.title}
        <avatar-display .avatarData=${avatar}></avatar-display>
      </button>
    </li>`
  }

  protected render(): TemplateResult {
      return html`<ul> 
        ${this.avatars.map((avatar) => this.avatarTemplate(avatar) )}
      </ul>
      `;
  };

  async connectedCallback(): Promise<void> {
    super.connectedCallback();
    this.avatars = await getAvatarData();
  }

  static styles = css`
    ul {
      list-style: none;
      display: flex;

      li {
        button {
          min-width: 600px;
          cursor: pointer;
        }
      }
    }
  `;
}