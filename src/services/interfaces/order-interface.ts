import { IOrder } from "../../interfaces/models/order";

export interface IProductsDetails {
  productos_idProductos: number;
  cantidad: number;
  precio: number;
}

export interface ICreateOrderProps extends Omit<IOrder, "total_orden"> {
  productsDetails: IProductsDetails[];
}

export interface IOrderServicesProps {
  create: (order: ICreateOrderProps) => void;
}
