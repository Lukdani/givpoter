import axios from "axios";
import { useContext, useState } from "react";

import { BASE_URL } from "../environment";
import { AuthContext } from "../providers/authProvider";

export interface UseApiPostProps {
  url: string;
  data?: any;
  disableAuth?: boolean;
}

const useApiPost = () => {
  const [response, setResponse] = useState<any>();
  const { user } = useContext(AuthContext);

  const callPost = ({ url, data, disableAuth }: UseApiPostProps) =>
    axios
      .post(`${BASE_URL}/${url}`, data && data, {
        headers: disableAuth
          ? null
          : {
              Authorization: `JWT ${user.access_token}`,
            },
      })
      .then((res) => {
        const response = res.data;
        setResponse(response);
      })
      .catch((error) => {});

  return { response, callPost };
};

export default useApiPost;
