import { useState, createContext, ReactNode } from "react";
import { Alert, Box, Snackbar, SnackbarOrigin } from "@mui/material";

type NotificationContext = {
  openNotification: boolean;
  setOpenNotification: (
    message: string,
    type: "error" | "success" | "warning" | "info"
  ) => void;
};

export const NotificationContext = createContext<NotificationContext>(
  {} as NotificationContext
);

interface State extends SnackbarOrigin {
  open: boolean;
  message: string;
  type: "error" | "success" | "warning" | "info";
}

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
    type: "info",
  });

  const setOpenNotification = (
    message: string,
    type: "error" | "success" | "warning" | "info"
  ) => {
    setNotification({ ...notification, message, type, open: true });
  };

  const close = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <NotificationContext.Provider
      value={{ openNotification: notification.open, setOpenNotification }}
    >
      <Box>
        {children}
        <Snackbar
          autoHideDuration={6000}
          anchorOrigin={{
            vertical: notification.vertical,
            horizontal: notification.horizontal,
          }}
          open={notification.open}
          onClose={close}
          key={notification.vertical + notification.horizontal}
        >
          <Alert
            onClose={close}
            severity={notification.type}
            sx={{ width: "100%" }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      </Box>
    </NotificationContext.Provider>
  );
};
