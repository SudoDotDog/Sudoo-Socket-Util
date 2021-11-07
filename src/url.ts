/**
 * @author WMXPY
 * @namespace Util
 * @description URL
 */

export const fixWebSocketUrl = (url: string): string => {

    if (url.startsWith('ws://') || url.startsWith('wss://')) {
        return url;
    }

    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url.replace(/^http/, 'ws');
    }

    return `ws://${url}`;
};
