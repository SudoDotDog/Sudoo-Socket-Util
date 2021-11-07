/**
 * @author WMXPY
 * @namespace Util
 * @description Authorization
 */

export const encodeBasicAuthorizationTokenNode = (username: string, password: string): string => {

    const base64: string = Buffer.from(`${username}:${password}`).toString('base64');

    return base64;
};

export const encodeBasicAuthorizationTokenWeb = (username: string, password: string): string => {

    const base64: string = window.btoa(`${username}:${password}`);

    return base64;
};
