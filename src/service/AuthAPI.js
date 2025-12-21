import API from './API';

export function login(payload) {
    return API.post('/auth/signin', payload);
}

export const logout = () => API.post('/auth/signout')