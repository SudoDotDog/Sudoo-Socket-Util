/**
 * @author WMXPY
 * @namespace Util
 * @description Authorization
 */

export const parseBasicAuthorizationToken = (username: string, password: string): string => {

    const base64: string = Buffer.from(`${username}:${password}`).toString('base64');

    return base64;
};
