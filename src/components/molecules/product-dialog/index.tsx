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
  foto: undefined,
  precio: 0,
  stock: 0,
};

export default function ProductFormDialog({
  onClose,
  onSave,
  open,
  initalData,
  categoriesOptions = [],
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

  const handleSave = (data: Omit<TProductForm, "foto"> & { foto: any }) => {
    onSave({ ...data, foto: file ? file : data.foto });
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
                {...field}
                disablePortal
                options={categoriesOptions}
                getOptionLabel={(option) => option.label} // Muestra el 'nombre' en el campo de selección
                isOptionEqualToValue={(option, value) =>
                  option.idCategoriaProductos === value.idCategoriaProductos
                } // Compara por 'id'
                onChange={(_, newValue) => {
                  field.onChange(
                    newValue ? newValue.idCategoriaProductos : null
                  ); // Guarda el 'id'
                }}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Categorías" />
                )}
                value={
                  categoriesOptions.find(
                    (option) => option.idCategoriaProductos === field.value
                  ) || null
                } // Sincroniza el valor de 'field' con la opción seleccionada
              />
            )}
          />

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
              size="medium"
            >
              Subir Nueva Foto
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
