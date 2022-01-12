import * as api from './api.js';

const host = 'http://localhost:3030/';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Implement application-specific requests

export async function getFurniture() {         
    return await api.get(host + 'data/catalog');
}

export async function getItemById(id) {
    return await api.get(host + 'data/catalog/' + id);
}
export async function getMyFurniture() {
    const userId = sessionStorage.getItem('authToken');
    return await api.get(host + `data/catalog?where=_ownerId%3D%22${userId}%22`);
}

export async function createFurniture(id) {
    return await api.post(host + 'data/catalog/' + id);
}
export async function updateFurniture(id) {
    return await api.put(host + 'data/catalog/' + id);
}
export async function deleteFurniture(id) {
    return await api.del(host + 'data/catalog/' + id);
}