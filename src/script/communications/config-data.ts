import axios from "axios";

export const getAvatarData = async (): Promise<any> => {
  const response = await axios.get("/data/avatars.json");

  return response.data;
}