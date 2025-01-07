import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IProductFormDialogProps, TProductForm } from "./interface";
import { Controller, useForm } from "react-hook-form";
import { Autocomplete, Stack, TextField } from "@mui/material";
import { useEffect } from "react";

const initialValues: TProductForm = {
  nombre: "",
  idProductos: 0,
  categoriaProductos_idCategoriaProductos: 0,
  foto: "",
  precio: 0,
  stock: 0,
};

export default function ProductFormDialog({
  onClose,
  onSave,
  open,
  initalData,
}: IProductFormDialogProps) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TProductForm>();

  useEffect(() => {
    if (!initalData) {
      reset(initialValues);
      return;
    }
    reset(initalData);
  }, [JSON.stringify(initalData || {})]);

  const handleClose = () => {
    onClose();
    reset(initialValues);
  };

  const handleSave = (data: TProductForm) => {
    onSave(data);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        component: "form",
      }}
    >
      <DialogTitle>Formulario de Producto</DialogTitle>
      <DialogContent>
        <Stack marginTop={2} rowGap={2}>
          <Controller
            control={control}
            name="nombre"
            rules={{ required: "El nombre es requerido" }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Nombre"
                error={!!errors.nombre?.message}
                helperText={errors.nombre?.message}
              />
            )}
          ></Controller>
          <Controller
            control={control}
            name="categoriaProductos_idCategoriaProductos"
            render={({ field }) => (
              <Autocomplete
                disablePortal
                options={[]}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Categoría" />
                )}
              />
            )} //TODO: Mirar como usar el Autocomplete, la implementacion esta incompleta
          ></Controller>

          <Controller
            control={control}
            name="precio"
            rules={{
              min: {
                value: 1,
                message: "El precio no puede ser menor a 1",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Precio"
                type="number"
                error={!!errors.precio?.message}
                helperText={errors.precio?.message}
              />
            )}
          ></Controller>
          <Controller
            control={control}
            rules={{
              min: {
                value: 1,
                message: "El stock no puede ser menor a 1",
              },
            }}
            name="stock"
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Stock"
                type="number"
                error={!!errors.stock?.message}
                helperText={errors.stock?.message}
              />
            )}
          ></Controller>
          <Controller
            control={control}
            name="foto"
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Stock"
                type="file"
                slotProps={{ inputLabel: { shrink: true } }}
              />
            )}
          ></Controller>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit(handleSave)}>Guardar Cambios</Button>
      </DialogActions>
    </Dialog>
  );
}
