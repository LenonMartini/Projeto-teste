import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import cookie from '../../services/cookie';
import { AuthService } from '../../services/auth';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const auth = useContext(AuthContext);
    const api = AuthService();
    useEffect(() => {
        const validateToken = async () => {
            const token = cookie.getToken();
            if(token){
                auth.user = (JSON.parse(token));
                setUser(JSON.parse(token));
            }else{
                cookie.deleteToken();
                setUser(null);
            }
        }
        validateToken();
    }, []); 
    
    const signin = async (email, senha) => {       
        const response = await api.login(email, senha); 
        if(response.data && response.statusCode === 200){            
           
            cookie.setToken(JSON.stringify(response.data));
            await setUser(response.data);
            auth.user = user;
            return true;
           
        }      
        return false;
    };

    const signout = () => {
        setUser(null);
    };

    const getImage = async () => {
        // Simulação para obter uma imagem
        return "https://example.com/user/image";
    };

    return (
        <AuthContext.Provider value={{ user, signin, signout, getImage }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
