import { Peer } from "peerjs";

/**
 * Connects directly with other Peers. Passes movement data, voice
 */

 let instance: IPeerConnection | null;

 export const getPeerConnection = (): IPeerConnection => {
     if (!instance) {
         instance = new PeerConnection();
     }
 
     return instance;
 }

 class PeerConnection implements IPeerConnection {
    peer: Peer | null = null;

    async connect(): Promise<string> {
        this.peer = new Peer();

        const promise = new Promise<string>((resolve, reject) => {
            this.peer?.on('open', (id) => resolve(id));

            this.peer?.on('error', (e) => reject(e.cause));
        });

        return promise
    }
 }
 