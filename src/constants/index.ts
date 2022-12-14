export const API_URL = process.env.API_URL;
export const BASE_URL = process.env.BASE_URL;
export const setBaseUrl = (path: string) => BASE_URL + path;
export const COOKIE_OPTION = { maxAge: 60 * 6 * 24 };
