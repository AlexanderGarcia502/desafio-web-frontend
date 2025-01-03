import { ICategory } from "../../../interfaces/models/category";
export type TCategoryInfo = Pick<ICategory, "idCategoriaProductos" | "nombre">;
export interface ICategoriesBarProps {
  categories: TCategoryInfo[];
  onChangeCategory?: (props: TCategoryInfo) => void;
}
