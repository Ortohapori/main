import {
  ORTOHAPORI_SERVER_PATH,
  SUCCESS_CODE_LIST,
  USER_ROUTES,
} from "../../constants/routes";
import Api from "../../api";
import { UserCreate, UserResponse } from "./UserService.types";

export const getUsers = async (
  paginate: boolean = true
): Promise<UserResponse> => {
  const response = await Api.get({
    url: `${ORTOHAPORI_SERVER_PATH}${USER_ROUTES.users}?paginate=${paginate}`,
  });

  return new Promise((resolve, reject) => {
    if (SUCCESS_CODE_LIST.includes(response.status)) {
      resolve(response.data);
    } else {
      reject(response);
    }
  });
};

export const getUser = async (id: number): Promise<any> => {
  const response = await Api.get({
    url: `${ORTOHAPORI_SERVER_PATH}${USER_ROUTES.users}/${id}`,
  });

  return new Promise((resolve, reject) => {
    if (SUCCESS_CODE_LIST.includes(response.status)) {
      resolve(response.data);
    } else {
      reject(response);
    }
  });
};

export const createUser = async (data: UserCreate) => {
  const response = await Api.post({
    url: `${ORTOHAPORI_SERVER_PATH}${USER_ROUTES.users}`,
    body: data,
  });

  return new Promise((resolve, reject) => {
    if (SUCCESS_CODE_LIST.includes(response.status)) {
      resolve(response.data);
    } else {
      reject(response);
    }
  });
};

export const updateUser = async (id: string, data: UserCreate) => {
  const response = await Api.put({
    url: `${ORTOHAPORI_SERVER_PATH}${USER_ROUTES.users}/${id}`,
    body: data,
  });

  return new Promise((resolve, reject) => {
    if (SUCCESS_CODE_LIST.includes(response.status)) {
      resolve(response.data);
    } else {
      reject(response);
    }
  });
};
