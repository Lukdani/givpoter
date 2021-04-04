import React, { useEffect, useState } from 'react';
import {useApiGet} from '../hooks/useApiGet';
import { IUserDetails } from '../models/IUserDetails';

import { GetUserDetails } from '../services/UserService';

export const UserContext = React.createContext<Partial<{userDetails: IUserDetails}>>({});

interface UserProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const UserConsumer = UserContext.Consumer;

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userDetails, setUserDetails] = useState<IUserDetails>();
  const {data} = useApiGet({url: GetUserDetails})

  useEffect(() => {
    if (data) setUserDetails(data)
  }, [data])

  return <UserContext.Provider value={{userDetails}}>{children}</UserContext.Provider>;
};
