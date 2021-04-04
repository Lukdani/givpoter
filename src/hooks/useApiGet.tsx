import axios from 'axios';
import { useCallback, useContext, useEffect, useState } from 'react';

import { BASE_URL } from '../environment';
import { AuthContext } from '../providers/authProvider';

export interface UseApiGetProps {
  url: string;
  disableAuth?: boolean;
}

const useApiGet = (options: UseApiGetProps) => {
  const [data, setData] = useState<any>();
  const {user} = useContext<any>(AuthContext);

  const CallApiGet = useCallback(() => {
    if (options.url && (options.disableAuth || user?.access_token)) {
      axios
        .get(`${BASE_URL}${options.url}`, {
          headers: {
            Authorization: options.disableAuth ? null : `JWT ${user?.access_token}`,
          },
        })
        .then((res) => {
          const response = res.data;
          setData(response);
        })
        .catch((error) => {
        });
    }
  }, [options.disableAuth, options.url, user?.access_token])

  useEffect(() => {
   if (options.disableAuth || user?.access_token) CallApiGet();
    
  }, [CallApiGet, options.disableAuth, options.url, user]);
  return { data };
};

const useCallApiGet = (options: UseApiGetProps) => {
  const [data, setData] = useState<any>();
  const {user} = useContext<any>(AuthContext);;

  const CallApiGet = useCallback(() => {
    if (options.url && user && user.access_token) {
      axios
        .get(`${BASE_URL}${options.url}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        })
        .then((res) => {
          const response = res.data;
          setData(response);
        })
        .catch((error) => {
        });
    }
  }, [options.url, user])

  useEffect(() => {
    CallApiGet();
    
  }, [CallApiGet, options.url, user]);
  return { data };
};


export  {useApiGet, useCallApiGet};
