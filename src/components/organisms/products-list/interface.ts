import { IProduct } from "../../../interfaces/models/product";
import { IProductItem } from "../../molecules/product-item/interface";

export interface IProductsListProps {
  products: Pick<
    IProduct,
    "nombre" | "precio" | "foto" | "idProductos" | "stock"
  >[];
  addToCart: (product: IProductItem) => void;
}
