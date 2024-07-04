import api from '../plugins/axios';

export const AuthService = () => ({
    login: async (email, senha) => {    
        
        const response = await api.post('/auth', {email, senha});
        return response.data;        
    }
});


