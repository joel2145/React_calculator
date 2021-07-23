import { createContext, useState, useContext } from 'react';

// ユーザーがログインしているかを管理する
const AuthContext = createContext();

export function useAuthContext() {
    return useContext(AuthContext);
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState('');

    const value = {
        user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};