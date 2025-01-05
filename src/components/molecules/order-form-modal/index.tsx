import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { IOrderFormInputs, IOrderModalProps } from "./interface";

const OrderFormModal: React.FC<IOrderModalProps> = ({
  open = true,
  onClose = () => {},
  onSubmit = (data: IOrderFormInputs) => data,
}) => {
  const { control, handleSubmit, reset } = useForm<IOrderFormInputs>();

  const handleFormSubmit = (data: IOrderFormInputs) => {
    const addressTrimSpaces = data.address.trim();
    onSubmit({ address: addressTrimSpaces });
    reset();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="add-address-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
          p: 4,
          width: 400,
        }}
      >
        <Typography variant="h6" component="h2" mb={2}>
          Agregar Dirección
        </Typography>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Stack spacing={2}>
            <Controller
              name="address"
              control={control}
              defaultValue=""
              rules={{
                required: "La dirección es requerida",
                minLength: {
                  value: 15,
                  message: "La dirección debe tener al menos 15 caracteres",
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Dirección"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <Button onClick={onClose} color="secondary">
                Cancelar
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default OrderFormModal;
