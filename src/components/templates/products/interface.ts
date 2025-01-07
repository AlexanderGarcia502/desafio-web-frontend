import { TProductForm } from "../../molecules/product-dialog/interface";
import { IProductsTableProps } from "../../organisms/products-table/interface";

export interface IProductTemplateProps
  extends Pick<IProductsTableProps, "onDelete" | "onEdit" | "rows"> {
  onAdd: (data: TProductForm) => void;
}
