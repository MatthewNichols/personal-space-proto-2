import { DefaultViewer } from "@babylonjs/viewer";
import { html, render } from "lit-html";
import { getAvatarData } from "../communications/config-data";

const mainTemplate = (avatars: any[]) => (
  html`<ul> 
    ${avatars.map((avatar) => avatarTemplate(avatar) )}
  </ul>`);
const avatarTemplate = (avatar: any) => (
  html`<li>
    ${avatar.title}
    <babylon id="${avatar.id}-model"></babylon>
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