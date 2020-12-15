import { IMessage } from '../../../definition/messages';
import { IRoom } from '../../../definition/rooms';
import { IUser } from '../../../definition/users';
import { ITypingDescriptor } from '../../bridges/IMessageBridge';
import { PermissionDeniedError } from '../../errors/PermissionDeniedError';
import { AppPermissionManager } from '../../managers/AppPermissionManager';
import { AppPermissions } from '../AppPermissions';

export const AppMessageBridge = {
    getById(messageId: string, appId: string): void {
        if (!AppPermissionManager.hasPermission(appId, AppPermissions.message.read)) {
            throw new PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions.message.read],
            });
        }
    },
    create(message: IMessage, appId: string): void {
        if (!AppPermissionManager.hasPermission(appId, AppPermissions.message.write)) {
            throw new PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions.message.write],
            });
        }
        return;
    },
    update(message: IMessage, appId: string): void {
        return;
    },
    notifyUser(user: IUser, message: IMessage, appId: string): void {
        return;
    },
    notifyRoom(room: IRoom, message: IMessage, appId: string): void {
        return;
    },
    typing(options: ITypingDescriptor): void {
        return;
    },
};
