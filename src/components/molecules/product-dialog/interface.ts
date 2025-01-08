import { ICategory } from "../../../interfaces/models/category";
import { IProduct } from "../../../interfaces/models/product";

export type TProductForm = Pick<
  IProduct,
  | "nombre"
  | "idProductos"
  | "categoriaProductos_idCategoriaProductos"
  | "precio"
  | "stock"
> & {
  foto: string | undefined;
};
export interface ICategoriesOption
  extends Pick<ICategory, "idCategoriaProductos"> {
  label: string;
}
export interface IProductFormDialogProps {
  open: boolean;
  initalData?: TProductForm;
  categoriesOptions: ICategoriesOption[];
  onClose: () => void;
  onSave: (data: TProductForm) => void;
}
