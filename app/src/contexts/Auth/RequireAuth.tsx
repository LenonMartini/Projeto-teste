import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from 'react-router-dom';
import Cookie from '../../services/cookie';


export const RequireAuth = ({ children }) => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const token = Cookie.getToken();
   

   /* const getImg = async () => {
        await auth.getImage();
    }*/

    useEffect(() => {
        const checkAuth = async () => {
            if (!auth.user || !token) {
                navigate('/');
            }
        };

        //getImg();
        checkAuth();
    }, [auth.user, token, navigate]);

   
    return auth.user && token ? children : null;
};
