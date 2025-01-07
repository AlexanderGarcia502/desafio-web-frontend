import { Button, Stack } from "@mui/material";
import SearchComponent from "../../atoms/inputs/simple-search";
import React from "react";
import { IProductTemplateProps } from "./interface";
import ProductsTable from "../../organisms/products-table";
import ProductFormDialog from "../../molecules/product-dialog";
import { TProductRow } from "../../organisms/products-table/interface";
import { TProductForm } from "../../molecules/product-dialog/interface";
import DeleteDialog from "../../molecules/delete-dialog";

const ProductsTemplate: React.FC<IProductTemplateProps> = ({
  rows,
  onDelete,
  onEdit,
  onAdd,
}) => {
  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [selectedProduct, setSelectedProduct] =
    React.useState<TProductForm | null>(null);
  const handleOpen = (product: TProductRow) => {
    setSelectedProduct(product);
    setOpen(true);
  };
  const handleClose = () => {
    setSelectedProduct(null);
    setOpen(false);
  };
  const handleAdd = () => {
    setSelectedProduct(null);
    setOpen(true);
  };
  const handleSave = (data: TProductForm) => {
    if (data.idProductos) {
      onEdit(data);
      console.log("* editing");
      return;
    }
    console.log("* adding");
    onAdd(data);
  };
  const handleDelete = (row: TProductRow) => {
    setSelectedProduct(row);
    setOpenDelete(true);
  };
  const handleDeleteClose = () => {
    setOpenDelete(false);
    setSelectedProduct(null);
  };
  const handleDeleteConfirm = () => {
    onDelete(selectedProduct!);
    setOpenDelete(false);
  };
  return (
    <>
      <ProductFormDialog
        initalData={selectedProduct || undefined}
        open={open}
        onClose={handleClose}
        onSave={handleSave}
      />
      <DeleteDialog
        open={openDelete}
        onClose={handleDeleteClose}
        onConfirm={handleDeleteConfirm}
      />
      <Stack rowGap={2}>
        <Stack
          spacing={{ xs: 2, lg: 1 }}
          direction={{ sx: "column", sm: "row", lg: "row" }}
          justifyContent="space-between"
          alignItems={{ sm: "center" }}
          paddingTop={1}
          paddingLeft={{ xs: 2, sm: 0 }}
          paddingRight={{ xs: 2, sm: 0 }}
          paddingBottom={5}
        >
          <Button variant="contained" onClick={handleAdd}>
            Agregar Producto
          </Button>
          <SearchComponent
            placeholder={"Buscar por nombre"}
            paperProps={{ sx: { width: { xs: "100%", sm: 400 } } }}
            onSearch={() => {}}
          />
        </Stack>

        <ProductsTable
          rows={rows}
          onDelete={handleDelete}
          onEdit={handleOpen}
        />
      </Stack>
    </>
  );
};

export default ProductsTemplate;
