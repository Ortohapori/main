/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios, { AxiosRequestConfig } from "axios";

export interface IRequest {
  url: string;
  body?: any;
  config?: AxiosRequestConfig<any>;
}

interface IHeaders {
  Authorization?: string;
}

const setAuthorizationHeader = (headers: IHeaders) => {
  const token = localStorage.getItem("token");
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
};

export const initialAxios = Axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

initialAxios.interceptors.request.use((config: AxiosRequestConfig) => {
  const headers: IHeaders = {};
  setAuthorizationHeader(headers);
  return { ...config, headers };
});

initialAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response.status === 403 &&
      error.response.data.error === "Forbidden"
    ) {
      window.location.href = "/dashboard";
    }
    return Promise.reject(error);
  }
);

const Api = {
  post: ({ url, body, config }: IRequest): Promise<any> =>
    initialAxios.post(url, body, config).catch((error) => ({
      hasError: true,
      ...error,
    })),

  delete: ({ url, config }: IRequest): Promise<any> =>
    initialAxios
      .delete(url, config)
      .catch((error) => ({ hasError: true, ...error })),

  get: ({ url, config }: IRequest): Promise<any> =>
    initialAxios
      .get(url, config)
      .catch((error) => ({ hasError: true, ...error })),

  put: ({ url, body, config }: IRequest): Promise<any> =>
    initialAxios.put(url, body, config).catch((error) => ({
      hasError: true,
      ...error,
    })),

  patch: ({ url, body, config }: IRequest): Promise<any> =>
    initialAxios.patch(url, body, config).catch((error) => ({
      hasError: true,
      ...error,
    })),

  setAuthToken: (token: string) => {
    initialAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },

  clearAuthToken: () => {
    delete initialAxios.defaults.headers.common["Authorization"];
  },
};

export default Api;
