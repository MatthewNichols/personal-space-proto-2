import "../style.scss";
import "./screens/login-screen";
import { getAvatarData } from "./communications/config-data";
import { showLoginScreen } from "./screens/login-screen";


const main = async () => {
  const avatars = await getAvatarData();
  console.log(avatars);

  showLoginScreen();
};

main();

// Load the login/scene selection screen

// Based on login/scene selection info load the scene and avatar 