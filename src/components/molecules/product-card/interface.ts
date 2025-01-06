import { IProduct } from "../../../interfaces/models/product";

export interface IProductCardProps
  extends Pick<IProduct, "nombre" | "precio" | "foto" | "stock"> {
  onClick: () => void;
}
