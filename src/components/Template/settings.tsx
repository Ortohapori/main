import Icon, { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { GiCarrot, GiCabbage } from "react-icons/gi";
import { MdChecklist } from "react-icons/md";

export const menuConfig = [
  {
    key: "/home",
    icon: <HomeOutlined />,
    label: "Inicio",
    path: "/home",
    roles: ["admin"],
  },
  {
    key: "/user",
    icon: <UserOutlined />,
    label: "Perfil",
    path: "/user",
    roles: ["admin"],
  },
  {
    key: "/recommendations",
    icon: <MdChecklist />,
    label: "Recomendações",
    path: "/recommendations",
    roles: ["admin"],
  },
  {
    key: "/my-plantations",
    icon: <GiCabbage />,
    label: "Minhas plantações ",
    path: "/my-plantations",
    roles: ["admin"],
  },
  {
    key: "/vegetables",
    icon: <GiCarrot />,
    label: "Hortaliças",
    path: "/vegetables",
    roles: ["admin"],
  },
];
