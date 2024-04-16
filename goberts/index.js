'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const gameServer = {
    onDestroyRoom(args) {
        // do something
    },
    onCreateRoom(args) {
        args.SDK.getRoomInfo().then(rommInfo => {
            // 获取房间信息成功
        }).catch(err => {
            // 获取房间信息失败
        });
    },
    onRealTimeServerConnected(args) {
        // do something
    },
    onRealTimeServerDisconnected(args) {
        // do something
    },
    onConnect(args) {
        // do something
    },
    onDisconnect(args) {
        // do something
    },
    onJoin(playerInfo, args) {
        // do something
    },
    onLeave(playerInfo, args) {
        // do something
    },
    onRecvFrame(msg, args) {
        let unhandleFrames = Array.isArray(msg) ? msg : [msg];
        unhandleFrames.forEach(message => {
            // seed frames which do not have user data
            if (!message.frameInfo || message.frameInfo.length < 1) {
                return;
            }
            // frames which have user data
            message.frameInfo.forEach((frameData) => {
                let frameDataList = frameData.data;
                if (frameDataList && frameDataList.length > 0) {
                    frameDataList.forEach(res => {
                        args.SDK.log.info('frameData=' + res);
                    });
                }
            });
        });
    },
    onRecvFromClient(args) {
        args.SDK.getCache('example').then(value => {
            // 获取缓存成功
        }).catch(err => {
            // 获取缓存失败
        });
    },
    onRecvFromClientV2(msg, args) {
        // do something, onRecvFromClientV2和onRecvFromClient使用一个即可，推荐使用V2
    },
    onRoomPropertiesChange(msg, args) {
        // do something
    },
    onStartFrameSync(args) {
        // do something
    },
    onStopFrameSync(args) {
        // do something
    },
    onUpdateCustomProperties(player, args) {
        // do something
    },
    onUpdateCustomStatus(msg, args) {
        // do something
    },
    onRequestFrameError(error, args) {
        // do something
    }
};
const gobeDeveloperCode = {
    gameServer: gameServer,
    appId: 'your appId',
};

exports.gobeDeveloperCode = gobeDeveloperCode;
