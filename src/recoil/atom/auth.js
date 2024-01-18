import { atom } from 'recoil';
import { localStorageEffect } from '../localStorage/localStorageEffect';

export const authenticationToken = atom({
    key: 'authenticationToken',
    default: {
        accessToken: '',
        passwordExpiredRemainingDay: 0,
    },
    effects: [localStorageEffect('user_token')],
});