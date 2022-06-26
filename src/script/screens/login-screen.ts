import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('login-screen')
export class LoginScreen extends LitElement {
  static styles = css`
    h2 {
      color: red;
    }

    #avatars {
      //width: calc(100% - 40px);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      .avatar {
        width: 40vw;

        babylon {
          border: 10px solid;
          border-radius: 10px;
        }

        button {
          margin: 40px;
          font-size: 24px;
          border: 2px solid;
          border-radius: 10px;
          padding: 10px 20px;
        }
      }
    }
  `;

  render() {
    return html`    
    <h2>Pick Avatar</h2>
    <div id="avatars"></div>
  `;
  }
}