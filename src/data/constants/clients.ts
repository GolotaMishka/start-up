const prefix = (type: string): string => `fire/clients/${type}`;

export const LIST_LOAD_START: string = prefix('LIST_LOAD_START');
export const LIST_LOAD_SUCCESS: string = prefix('LIST_LOAD_SUCCESS');
export const LIST_LOAD_FAILED: string = prefix('LIST_LOAD_FAILED');

export const CREATE_START: string = prefix('CREATE_START');
export const CREATE_SUCCESS: string = prefix('CREATE_SUCCESS');
export const CREATE_FAILED: string = prefix('CREATE_FAILED');

export const CLEAR: string = prefix('CLEAR');
