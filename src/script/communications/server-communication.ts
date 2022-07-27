import axios from "axios";
import { io, Socket } from "socket.io-client";

/**
 * Track users
 *  Data: { unique Id, peer ID, Avatar }
 * 
 * Report to Users the other Users info (REST), and notify Users of new User Logins and Log out / ?Disconnections?
 * 
 * Very Important that the Clients know which avatar is themselves and what is others
 */

let instance: IServerConnection | null;

export const getServerConnection = (): IServerConnection => {
    if (!instance) {
        instance = new ServerConnection(import.meta.env.VITE_API_URL, import.meta.env.VITE_WS_URL);
    }

    return instance;
}

class ServerConnection implements IServerConnection {
    socket: Socket;

    constructor(private apiUrl: string, wsUrl: string) {
        if (wsUrl) {
            this.socket = io(wsUrl);
        } else {
            this.socket = io();
        }
    }

    async getClaimedAvatars(): Promise<GetClaimedAvatarsPayload> {
        const response = await axios.get<GetClaimedAvatarsPayload>(`${this.apiUrl}/taken-avatars`);
        return response.data;
    }

    /**
     * Login to system
     * Notifies the server that there is a new user on the system. Assumes that Peer has been initialized.
     * Takes Peer connection id, avatar id, ...
     */
    login(avatarId: string, peerId: string) {
        console.log(avatarId, peerId);

        // send payload to server
    }
}