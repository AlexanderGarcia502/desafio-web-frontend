import { TOrderRow } from "../orders-table/interface";

export interface IOrderDetailsModalProps {
  onReject: () => void;
  onAccept: (date: string) => void;
  products: any[];
  open: boolean;
  onClose: () => void;
}
