import { TOrderRow } from "../../organisms/orders-table/interface";

export interface IOrderTemplateProps {
  rows: TOrderRow[];
  onSearch: (value: string) => void;
  onAccept: (row: TOrderRow, date: string) => void;
  onReject: (row: TOrderRow) => void;
}
