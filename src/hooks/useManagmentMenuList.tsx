import ListIcon from "@mui/icons-material/List";
import { useTheme } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import CategoryIcon from "@mui/icons-material/Category";
import LocalMallIcon from "@mui/icons-material/LocalMall";
export const useManagmentMenuList = () => {
  const theme = useTheme();
  return [
    {
      title: "Ordenes",
      path: "/management/orders",
      icon: <ListIcon sx={{ color: theme.palette.text.secondary }} />,
    },
    {
      title: "Productos",
      path: "/management/products",
      icon: <LocalMallIcon sx={{ color: theme.palette.text.secondary }} />,
    },
    {
      title: "Categorias",
      path: "/management/categories",
      icon: <CategoryIcon sx={{ color: theme.palette.text.secondary }} />,
    },
    {
      title: "Usuarios",
      path: "/management/users",
      icon: <GroupIcon sx={{ color: theme.palette.text.secondary }} />,
    },
  ];
};
