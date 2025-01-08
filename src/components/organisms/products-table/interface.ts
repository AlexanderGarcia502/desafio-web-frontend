import { IProduct } from "../../../interfaces/models/product";

export type TProductRow = Pick<
  IProduct,
  | "idProductos"
  | "nombre"
  | "precio"
  | "categoriaProductos_idCategoriaProductos"
  | "stock"
> & {
  foto: string | undefined;
};
export interface IProductsTableProps {
  rows: TProductRow[];
  onDelete: (row: TProductRow) => void;
  onEdit: (row: TProductRow) => void;
}
