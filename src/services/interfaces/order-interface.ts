import { IOrder } from "../../interfaces/models/order";

export interface IProductsDetails {
  productos_idProductos: number;
  cantidad: number;
  precio: number;
}

export interface ICreateOrderProps
  extends Omit<IOrder, "total_orden" | "subtotal"> {}

export interface IOrderWithDetails
  extends Pick<
    IOrder,
    | "idOrden"
    | "nombre_completo"
    | "direccion"
    | "total_orden"
    | "detallesOrden"
  > {
  estado: string;
}

export interface IOrderServicesProps {
  create: (order: Omit<ICreateOrderProps, "idOrden">) => void;
  getAll: () => Promise<IOrderWithDetails[]>;
}

export interface IDecideOrderProps
  extends Pick<IOrder, "idOrden" | "fecha_entrega"> {
  estado: string;
}
