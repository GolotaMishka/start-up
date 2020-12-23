const prefix = (type: string): string => `fire/api/${type}`;

export const UNAUTHORIZED: string = prefix('UNAUTHORIZED');
export const SERVER_ERROR: string = prefix('SERVER_ERROR');
export const NOT_FOUND: string = prefix('NOT_FOUND');
export const CONNECTION_ERROR: string = prefix('CONNECTION_ERROR');
export const FORBIDDEN: string = prefix('CONNECTION_ERROR');
export const UNEXPECTED_ERROR: string = prefix('UNEXPECTED_ERROR');

export const SUCCESS: string = prefix('SUCCESS');

export const CLEAR: string = prefix('CLEAR');
