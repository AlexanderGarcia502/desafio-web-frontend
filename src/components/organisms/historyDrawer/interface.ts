import { IOrder } from "../../../interfaces/models/order";
import { IOrderDetail } from "../../../interfaces/models/orderDetail";

export interface IHistoryReturn
  extends Array<
    Pick<
      IOrder,
      "idOrden" | "fecha_entrega" | "total_orden" | "usuarios_idUsuarios"
    > & {
      estado: string;
      detalles: Array<
        Pick<
          IOrderDetail,
          "precio" | "cantidad" | "subtotal" | "idOrdenDetalles"
        > & {
          idProductos: number;
          nombre: string;
          foto: string;
        }
      >;
    }
  > {}
