import { useState } from "react";
import "@fontsource/roboto/900-italic.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  ListItemIcon,
  useMediaQuery,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  AccountCircle,
  History,
  ShoppingCart,
  Logout,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Logo from "../../atoms/logo";
import SearchInput from "../../atoms/inputs/search-input";
import { useCart } from "../../../hooks/useCart";
import { getUser } from "../../../utils/getUser";
import logout from "../../../utils/logout";

interface INavbarProps {
  children?: React.ReactNode;
  onChangeSearchInput: (value: string) => void;
  onClickCartButton: () => void;
  onClickMenuButton: () => void;
  onHistoryAction: () => void;
}

export default function Navbar({
  children,
  onChangeSearchInput,
  onClickCartButton,
  onClickMenuButton,
  onHistoryAction,
}: INavbarProps) {
  const theme = useTheme();

  const { nombre_completo } = getUser();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { cart, getTotal } = useCart();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const firstName = nombre_completo.split(" ")[0];

  const handleAccountDrawerOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAccountDrawerClose = () => {
    setAnchorEl(null);
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
              onClick={() => {
                onClickMenuButton();
              }}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuIcon />
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
              <Box
                onClick={handleAccountDrawerOpen}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 2,
                  cursor: "pointer",
                }}
              >
                <IconButton color="inherit">
                  <AccountCircle />
                </IconButton>
                <Typography
                  color={theme.palette.text.secondary}
                  variant="body1"
                >
                  {firstName}
                </Typography>
              </Box>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleAccountDrawerClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={logout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">Logout</Typography>
                </MenuItem>
              </Menu>

              <Box
                onClick={onHistoryAction}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 2,
                  cursor: "pointer",
                }}
              >
                <IconButton color="inherit">
                  <History />
                </IconButton>
                <Typography
                  color={theme.palette.text.secondary}
                  variant="body1"
                >
                  Historial
                </Typography>
              </Box>

              {children}
            </Box>
            <Box
              onClick={onClickCartButton}
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: 2,
                cursor: "pointer",
              }}
            >
              <IconButton color="inherit">
                <ShoppingCart />
              </IconButton>
              <Typography color={theme.palette.text.secondary} variant="body1">
                {isMobile ? `${cart.length}` : `Q${getTotal()}`}
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
