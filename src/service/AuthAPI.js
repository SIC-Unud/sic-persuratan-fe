import API from './API';

export function login(payload) {
    return API.post('/auth/signin', payload).then(res => res.data);
}