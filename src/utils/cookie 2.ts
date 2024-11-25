import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name: string, value: string) => {
    return cookies.set(name, value, { path: '/', expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) });
};

export const getCookie = (name: string) => {
    return cookies.get(name);
};

export const removeCookie = (name: string) => {
    return cookies.remove(name);
};
