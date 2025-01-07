import { IProduct } from "./product";

export interface IOrderDetail {
  idOrdenDetalles?: number;
  orden_idOrden: number;
  productos_idProductos: number;
  cantidad: number;
  precio: number;
  subtotal: number;
  producto: Pick<IProduct, "foto" | "nombre">;
}
