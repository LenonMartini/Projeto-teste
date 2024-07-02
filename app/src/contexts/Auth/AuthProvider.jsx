import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const auth = useContext(AuthContext);
    useEffect(() => {
        const validateToken = async () => {
            auth.user = 'Lenon Emanuel Martini'
        }
        validateToken();
    }, []); 
    
    const signin = async (email, password) => {
        // Simulação de autenticação
        if (email === "admin@example.com" && password === "password") {
            const userData = { email };
            setUser(userData);
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
