import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getF(search) {
    if(search) {
        return await api.get(host + '/data/catalog?where='+ `make LIKE "${search}"`);
    } else {
        return await api.get(host + '/data/catalog');
    }
}

