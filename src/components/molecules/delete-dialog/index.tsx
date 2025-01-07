import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IDeleteDialogProps } from "./interface";
import { useTheme } from "@mui/material";

export default function DeleteDialog({
  open,
  onClose,
  onConfirm,
}: IDeleteDialogProps) {
  const theme = useTheme();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Eliminar Registro</DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{ color: theme.palette.text.primary }}
          id="alert-dialog-description"
        >
          ¿Estas seguro que deseas eliminar este registro?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onConfirm} autoFocus>
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
