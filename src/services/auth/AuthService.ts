import {
  ORTOHAPORI_SERVER_PATH,
  SUCCESS_CODE_LIST,
  AUTH_ROUTES,
} from "../../constants/routes";
import Api from "../../api";
import { LoginRequest, LoginResponse } from "./AuthService.types";

export const login = async (userData: LoginRequest): Promise<LoginResponse> => {
  const response = await Api.post({
    url: `${ORTOHAPORI_SERVER_PATH}${AUTH_ROUTES.login}`,
    body: userData,
  });

  return new Promise((resolve, reject) => {
    if (SUCCESS_CODE_LIST.includes(response.status)) {
      resolve(response.data);
    } else {
      reject(response);
    }
  });
};
