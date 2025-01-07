import { IProduct } from "../../../interfaces/models/product";

export type TProductRow = Pick<
  IProduct,
  | "idProductos"
  | "nombre"
  | "precio"
  | "foto"
  | "categoriaProductos_idCategoriaProductos"
  | "stock"
>;
export interface IProductsTableProps {
  rows: TProductRow[];
  onDelete: (row: TProductRow) => void;
  onEdit: (row: TProductRow) => void;
}
