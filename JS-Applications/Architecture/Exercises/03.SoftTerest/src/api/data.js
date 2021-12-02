import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const host = 'http://localhost:3030/';

export async function getIdeas() {
    return await api.get(host + 'data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
}

export async function getIdeaById(id) {
    return await api.get(host + 'data/ideas/' + id);
}   