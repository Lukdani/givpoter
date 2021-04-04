import React, { useEffect, useState } from 'react';
import useApiPost from '../hooks/useApiPost';
import { LogInUser } from '../services/AuthService';

export const AuthContext = React.createContext<Partial<any>>({});

interface UserProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>();
  const {callPost, response} = useApiPost();

  const handleLogin = (username: string, password: string) => {
callPost({data: {username, password}, url: LogInUser, disableAuth: true})
  };

  useEffect(() => {
    if (response?.access_token) setUser(response)
  }, [response])

  return <AuthContext.Provider value={{user, handleLogin}}>{children}</AuthContext.Provider>;
};
