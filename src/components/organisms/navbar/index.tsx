import { useState } from "react";
import "@fontsource/roboto/900-italic.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  ListItemButton,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  History,
  ShoppingCart,
  Close,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Logo from "../../atoms/logo";
import SearchInput from "../../atoms/inputs/search-input";
import IconButtonWithText from "../../molecules/Icon-button-with-text";
import { useCart } from "../../../hooks/useCart";

interface INavbarProps {
  children?: React.ReactNode;
  onChangeSearchInput: (value: string) => void;
  onClickCartButton: () => void;
}

export default function Navbar({
  children,
  onChangeSearchInput,
  onClickCartButton,
}: INavbarProps) {
  const theme = useTheme();

  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);

  const { cart, getTotal } = useCart();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleMenuDrawer = () => {
    setOpenMenuDrawer(!openMenuDrawer);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "primary" }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              maxWidth: 1400,
              width: "100%",
              margin: "0 auto",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleMenuDrawer}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <Menu />
            </IconButton>

            <Logo
              sx={{ display: { xs: "none", md: "block" }, marginRight: 2 }}
            />

            <SearchInput
              placeholder="Buscar producto"
              onChange={onChangeSearchInput}
            />
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                marginLeft: 2,
              }}
            >
              {children}
            </Box>
            <IconButtonWithText
              onClick={onClickCartButton}
              icon={<ShoppingCart />}
              text={isMobile ? `${cart.length}` : `Q${getTotal()}`}
              variantText="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: 2,
                cursor: "pointer",
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={openMenuDrawer} onClose={toggleMenuDrawer}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleMenuDrawer}
          onKeyDown={toggleMenuDrawer}
        >
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
            <ListItemButton>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Mi cuenta" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <History />
              </ListItemIcon>
              <ListItemText primary="Historial" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

Navbar.item = IconButtonWithText;
