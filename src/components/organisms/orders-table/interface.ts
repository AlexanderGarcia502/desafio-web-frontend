import { IOrder } from "../../../interfaces/models/order";

export type TOrderRow = Pick<
  IOrder,
  "nombre_completo" | "total_orden" | "fecha_entrega" | "orderDetails"
>;
export interface IOrderTableProps {
  rows: TOrderRow[];
  onSeeDetails: (data: TOrderRow) => void;
}
