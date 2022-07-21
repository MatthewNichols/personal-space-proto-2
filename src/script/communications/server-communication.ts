//@ts-ignore
import axios from "axios";
//@ts-ignore
import { io, Socket } from "socket.io-client";

/**
 * Track users
 *  Data: { unique Id, peer ID, Avatar }
 * 
 * Report to Users the other Users info (REST), and notify Users of new User Logins and Log out / ?Disconnections?
 * 
 * Very Important that the Clients know which avatar is themselves and what is others
 */

let instance: ServerConnection | null;

export const getServerConnection = (): ServerConnection => {
    if (!instance) {
        instance = new ServerConnection(import.meta.env.VITE_API_URL, import.meta.env.VITE_WS_URL);
    }

    return instance;
}

class ServerConnection {
    socket: Socket;

    constructor(private apiUrl: string, wsUrl: string) {
        if (wsUrl) {
            this.socket = io(wsUrl);
        } else {
            this.socket = io();
        }
    }

}