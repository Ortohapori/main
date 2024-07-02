import { Route, Navigate, Routes } from "react-router-dom";
import { Button, Image, Result } from "antd";
import image404 from "../assets/img/404.png";
import Title from "antd/lib/typography/Title";
import { Login, Register, Home } from "../pages";
import { useAuth } from "../providers/AuthProvider/AuthProvider";
import Template from "../components/Template";
import Vegetables from "../pages/Vegetables";
import User from "../pages/User";
import Recommendations from "../pages/Recommendations";
import Vegetable from "../pages/Vegetable";
import MyPlantations from "../pages/MyPlantations";

const NotFound = function (props: any) {
  return <Result status="404" title="404" subTitle="Página não encontrada." />;
};

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  // const { states } = useAuth();

  // if (!states.token) {
  //   return <Navigate to="/home" />;
  // }

  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Template />
          </PrivateRoute>
        }
      >
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-plantations"
          element={
            <PrivateRoute>
              <MyPlantations />
            </PrivateRoute>
          }
        />
        <Route
          path="/vegetables"
          element={
            <PrivateRoute>
              <Vegetables />
            </PrivateRoute>
          }
        />
        <Route
          path="/vegetables/:id"
          element={
            <PrivateRoute>
              <Vegetable />
            </PrivateRoute>
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
        <Route
          path="/recommendations"
          element={
            <PrivateRoute>
              <Recommendations />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound title="Página não encontrada." />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
