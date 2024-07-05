import api from '../plugins/axios';

export const AuthService = () => ({
    login: async (email, senha) => {    
        
        const response = await api.post('/auth/login', {email, senha});
        return response.data;        
    },

    logout: async () => {            
        const response = await api.get('/auth/logout');
        return response.data;       
    }
});


