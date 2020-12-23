const prefix = (type: string): string => `fire/auth/${type}`;

export const SESSION_LOAD_START = prefix('SESSION_LOAD_START');
export const SESSION_LOADED = prefix('SESSION_LOADED');
export const SESSION_LOAD_FAILED = prefix('SESSION_LOAD_FAILED');
export const SESSION_CLOSE = prefix('SESSION_CLOSE');

export const LOGIN: string = prefix('LOGIN');
export const LOGIN_SUCCESS: string = prefix('LOGIN_SUCCESS');
export const LOGIN_FAILED: string = prefix('LOGIN_FAILED');

export const LOGOUT: string = prefix('LOGOUT');
