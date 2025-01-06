import React from "react";
import { TOrderRow } from "../../organisms/orders-table/interface";
import { IOrderDetailsModalProps } from "../../organisms/order-details-modal/interface";

export interface IOrderTemplateProps {
  rows: TOrderRow[];
  onSearch: (value: string) => void;
  onAccept: (row: TOrderRow, date: string) => void;
  onReject: (row: TOrderRow) => void;
}
