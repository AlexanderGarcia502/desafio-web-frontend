import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Logo from "../../atoms/logo";
import {
  AccountCircle,
  Close,
  ExpandLess,
  ExpandMore,
  History,
  Logout,
} from "@mui/icons-material";
import { getUser } from "../../../utils/getUser";
import { useState } from "react";
import logout from "../../../utils/logout";

interface IMenuDrawerProps {
  open: boolean;
  toggleMenuDrawer: () => void;
}

const MenuDrawer = ({ open, toggleMenuDrawer }: IMenuDrawerProps) => {
  const [openSubmenu, setOpenSubmenu] = useState(true);

  const { nombre_completo } = getUser();
  const firstName = nombre_completo.split(" ")[0];

  const handleClick = () => {
    setOpenSubmenu(!openSubmenu);
  };

  return (
    <Drawer anchor="left" open={open} onClose={toggleMenuDrawer}>
      <Box sx={{ width: 250 }} role="presentation" onKeyDown={toggleMenuDrawer}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
          }}
        >
          <Logo
            sx={{
              display: { xs: "block", md: "none" },
              color: "primary.main",
              marginRight: 2,
            }}
          />
          <IconButton onClick={toggleMenuDrawer}>
            <Close />
          </IconButton>
        </Box>
        <Divider />
        <List component="nav">
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary={firstName} />
            {openSubmenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSubmenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={logout}>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
            <ListItemIcon>
              <History />
            </ListItemIcon>
            <ListItemText primary="Historial" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default MenuDrawer;
