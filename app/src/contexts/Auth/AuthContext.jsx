import { createContext } from 'react';

export const AuthContext = createContext({
    user: null,
    signin: async (email, password) => false,
    signout: () => {},
    getImage: async () => null,
});
