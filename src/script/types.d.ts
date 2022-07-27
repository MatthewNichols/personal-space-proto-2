
interface AvatarData {
    id: string;
    title: string;
    meshFile: string;
}

interface GetClaimedAvatarsPayload {
    takenAvatarIds: string[];
}

interface IServerConnection {
    getClaimedAvatars(): Promise<GetClaimedAvatarsPayload>;
    login(avatarId: string, peerId: string): void;
}

interface IPeerConnection {
    connect(): Promise<string>;
}

