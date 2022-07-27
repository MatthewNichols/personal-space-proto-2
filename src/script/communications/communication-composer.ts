import { getPeerConnection } from "./peer-communications";
import { getServerConnection } from "./server-communication";

const peerConnection = getPeerConnection();
const serverConnection = getServerConnection();

// We need more data passed in here
export const login = async (avatarId: string) => {
    const peerId = await peerConnection.connect();
    
    serverConnection.login(avatarId, peerId);
}