import axios from 'axios'
import Cookie from '../services/cookie';


const api = axios.create({
 baseURL: "http://127.0.0.1:8000/api/",
 //baseURL: import.meta.env.BASE_URL,
 headers: {
    "Content-type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*" 
  }
});

api.interceptors.request.use((config) => {
    const token = Cookie.getToken();
    
    if(token){
      const accessToken = JSON.parse(token);
      /*config.headers.common['Authorization'] = `Bearer ${token}`;*/
      config.headers.Authorization = `Bearer ${accessToken.access_token}`; 
    }
    
    return config;
 },
 (error) => {
   return Promise.reject(error);
 }
);

export default api;