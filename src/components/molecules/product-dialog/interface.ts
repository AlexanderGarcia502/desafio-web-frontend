import { IProduct } from "../../../interfaces/models/product";

export type TProductForm = Pick<
  IProduct,
  | "nombre"
  | "idProductos"
  | "categoriaProductos_idCategoriaProductos"
  | "foto"
  | "precio"
  | "stock"
>;
export interface IProductFormDialogProps {
  open: boolean;
  initalData?: TProductForm;
  onClose: () => void;
  onSave: (data: TProductForm) => void;
}
