export const basePath = '/';

const applyBaseUrl = (url: string): string => `${basePath}${url}`;

// Shared paths

export const signInPath = applyBaseUrl('sign-in');

export const signUpPath = applyBaseUrl('sign-up');

export const paginatedPath = (path: string) => (page: number | string): string => `${path}/page/${page}`;

// App

export const appPath = applyBaseUrl('app');

const applyAppPathTo = (path) => `${appPath}/${path}`;

export const termsOfUsePath = applyAppPathTo('home');
