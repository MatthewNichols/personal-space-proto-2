import { DefaultViewer } from "@babylonjs/viewer";
import { html, render } from "lit-html";
import { getAvatarData } from "../communications/config-data";
import { login } from "../communications/communication-composer";

const avatarClickHandler = async (avatar: AvatarData) => {
  console.log("click", avatar);
  await login(avatar.id)
}

const mainTemplate = (avatars: AvatarData[]) => (
  html`<ul> 
    ${avatars.map((avatar) => avatarTemplate(avatar) )}
  </ul>`);

const avatarTemplate = (avatar: AvatarData) => (
  html`<li>
    <button @click=${ () => avatarClickHandler(avatar) }>
      ${avatar.title}
      <babylon id="${avatar.id}-model"></babylon>
    </button>
  </li>`);

const renderNode = document.getElementById('login-screen')!;

export const showLoginScreen = async () => {
  const avatarData = await getAvatarData();

  render(mainTemplate(avatarData), renderNode);

  avatarData.forEach((a: any) => {
    const babylonEl = document.getElementById(`${ a.id }-model`);
    if (babylonEl) {
      new DefaultViewer(babylonEl, { 
        model: { url: a.meshFile }, extends: "minimal"
      })
    }
  })
};