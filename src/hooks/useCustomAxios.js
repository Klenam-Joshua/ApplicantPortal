import { useEffect } from "react";
import { api } from "../api/api";

export const useCustomAxios = () => {
  useEffect(() => {
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          // config.headers.Authorization = `Bearer ${token}`;
          return config;
        }
      },
      (error) => {
        Promise.reject(error);
      }
    );
    const responseIntercept = api.interceptors.response.use(
      () => {},
      async (errors) => {
        const prevConfig = errors.config;

        if (errors.response.status === 401 && !prevConfig.sent) {
          //refresh token
          //const token = await refreshToken();
          // errors.headers.authorization = `Bearer ${token}`;
          prevConfig.sent = true;
          return api(prevConfig);
        }
        return Promise.reject(errors);
      }
    );

    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };

    //auth should be passed as a depdency item
  }, []);

  return { api };
};
