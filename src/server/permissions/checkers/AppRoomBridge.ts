import { IMessage } from '../../../definition/messages';
import { IRoom } from '../../../definition/rooms/IRoom';

export const AppRoomBridge = {
    create(room: IRoom, members: Array<string>, appId: string): void {
        return;
    },
    getById(roomId: string, appId: string): void {
        return;
    },
    getByName(roomName: string, appId: string): void {
        return;
    },
    getCreatorById(roomId: string, appId: string): void {
        return;
    },
    getCreatorByName(roomName: string, appId: string): void {
        return;
    },
    getDirectByUsernames(username: Array<string>, appId: string): void {
        return;
    },
    getMembers(roomId: string, appId: string): void {
        return;
    },
    update(room: IRoom, members: Array<string>, appId: string): void {
        return;
    },
    createDiscussion(room: IRoom, parentMessage: IMessage | undefined, reply: string | undefined, members: Array<string>, appId: string): void {
        return;
    },
};