import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IProductFormDialogProps, TProductForm } from "./interface";
import { Controller, useForm } from "react-hook-form";
import { Autocomplete, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

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
  const [file, setFile] = useState<File | null>(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TProductForm>();

  useEffect(() => {
    if (!initalData) {
      reset(initialValues);
      setFile(null);
      return;
    }
    reset(initalData);
    setFile(null);
  }, [JSON.stringify(initalData || {})]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

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
          <Stack spacing={1}>
            <input
              type="file"
              id="file-input"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            {file && (
              <Stack direction="column" spacing={1} justifyContent="center">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Vista previa"
                  style={{
                    width: 100,
                    height: 100,
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
                <Typography variant="body1" color="success" fontWeight="bold">
                  {file.name}
                </Typography>
              </Stack>
            )}
            <Button
              variant="contained"
              component="label"
              htmlFor="file-input"
              size="medium" // Botón más pequeño
            >
              Subir Foto
            </Button>
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit(handleSave)}>Guardar Cambios</Button>
      </DialogActions>
    </Dialog>
  );
}
