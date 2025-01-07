import { IOrderDetail } from "../../../interfaces/models/orderDetail";

export interface IOrderDetailsModalProps {
  onReject: () => void;
  onAccept: (date: string) => void;
  products: Omit<IOrderDetail, "orden_idOrden">[];
  open: boolean;
  onClose: () => void;
}
