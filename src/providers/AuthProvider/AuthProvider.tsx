import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { login } from "../../services/auth/AuthService";
import * as jwt_decode from "jwt-decode";

import { LoginRequest } from "../../services/auth/AuthService.types";
import { useNavigate, useLocation } from "react-router-dom";
import Api from "../../api";
import * as Utils from "../../utils";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<unknown>({});
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token") ?? null
  );

  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;

  const loginUser = useCallback(async (userData: LoginRequest) => {
    const response = await login(userData);

    if (response?.access_token) {
      const authToken = response.access_token;
      const decodedToken: any = jwt_decode(authToken);

      const verifyRole =
        decodedToken?.role &&
        (decodedToken.role.includes("admin") ||
          decodedToken.role.includes("operator"));
      if (!verifyRole) {
        Utils.showNotification(
          "error",
          "Você não tem permissão para acessar o sistema"
        );
      } else {
        setToken(authToken);

        localStorage.setItem("token", authToken);

        Api.setAuthToken(authToken);

        if (decodedToken) {
          setUser(decodedToken);
        }
      }
    }

    return response;
  }, []);

  const logoutUser = useCallback(() => {
    setUser({});
    setToken(null);
    localStorage.removeItem("token");
    Api.clearAuthToken();
  }, []);

  const verifyTokenExpiration = useCallback(
    (expirationTimeInSeconds: number) => {
      if (expirationTimeInSeconds) {
        const currentTimeInSeconds = Math.floor(Date.now() / 1000);

        if (expirationTimeInSeconds < currentTimeInSeconds) {
          logoutUser();
        }
      }
    },
    [logoutUser]
  );

  const verifyToken = useCallback(() => {
    if (token) {
      const decodedToken: any = jwt_decode(token);
      setUser(decodedToken);
      verifyTokenExpiration(decodedToken.exp);
      if (currentRoute === "/login") navigate("/");
    }
  }, [currentRoute, navigate, token]);

  const authContextValue = useMemo(() => {
    const states = {
      user,
      token,
    };

    const actions = {
      loginUser,
      logoutUser,
    };

    return { states, actions };
  }, [user, token, loginUser, logoutUser]);

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
