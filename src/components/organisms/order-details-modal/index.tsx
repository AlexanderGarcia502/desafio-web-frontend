import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { IOrderDetailsModalProps } from "./interface";
import { List, Stack, TextField, Typography } from "@mui/material";
import ProductLargeCard from "../../molecules/product-large-card";
import { NotificationContext } from "../../../context/notification";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function OrderDetailsModal({
  products,
  open,
  onClose,
  onAccept,
  onReject,
}: IOrderDetailsModalProps) {
  const { setOpenNotification } = React.useContext(NotificationContext);
  const [date, setDate] = React.useState<string | null>(null);
  const _onAccept = () => {
    if (!date) {
      setOpenNotification("Debes seleccionar una fecha", "error");
      return;
    }
    onAccept(date);
    onClose();
  };

  const _onReject = () => {
    onReject();
    onClose();
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Productos de la orden"}</DialogTitle>
      <DialogContent>
        <Stack rowGap={2} marginTop={2}>
          <Typography fontWeight="bold">Fecha de Entrega</Typography>
          <TextField
            label=""
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {products.map((product) => {
              const {
                productos_idProductos,
                precio,
                subtotal,
                cantidad,
                producto,
              } = product;
              return (
                <ProductLargeCard
                  key={productos_idProductos}
                  name={producto.nombre}
                  image={producto.foto}
                  quantity={cantidad}
                  price={precio}
                  subtotal={subtotal}
                />
              );
            })}
          </List>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={_onReject}>
          Rechazar
        </Button>
        <Button onClick={_onAccept}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  );
}
