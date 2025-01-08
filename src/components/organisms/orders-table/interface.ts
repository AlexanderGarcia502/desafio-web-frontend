import { IOrder } from "../../../interfaces/models/order";
import { IOrderDetail } from "../../../interfaces/models/orderDetail";

export type TOrderRow = Pick<
  IOrder,
  "nombre_completo" | "total_orden" | "direccion" | "idOrden"
> & {
  detallesOrden: Omit<IOrderDetail, "orden_idOrden">[];
  estado: string;
};
export interface IOrderTableProps {
  rows: TOrderRow[];
  onSeeDetails: (data: TOrderRow) => void;
}
