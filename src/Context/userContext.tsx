import   { createContext, useEffect, useState } from 'react';
import api from '../api';

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) =>{
 const  [login, setLogin] = useState(false);
 const [user, setUser] = useState({});

    const getUser = () => {
        api.get('/user/get-user').then(({ data }) => {
            setUser(data.user);
        }).catch(() => {
            
        })
    }


 const handleLogin = (email: string, password: string) => {
    api.post('/user/sign-in', {email, password}).then(({ data}) =>{
        setLogin(true);

        localStorage.setItem('token', data.token )
    }).catch((error) => {
        console.log('não foi possivel fazer o login');
    })
 }

 return(
    <UserContext.Provider value={{
        login,
        user,
        handleLogin
    }}>
        {children}
    </UserContext.Provider>

 )
}