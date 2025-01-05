import React from "react";
import { IProductsListProps } from "../../organisms/products-list/interface";
import { ICategory } from "../../../interfaces/models/category";
import { ICategoriesBarProps } from "../../organisms/categories-bar/interface";
import { ICartActions } from "../../organisms/cart-drawer/interface";
import { IProductItem } from "../../molecules/product-item/interface";
import { IOrderFormInputs } from "../../molecules/order-form-modal/interface";

export type TCategoryInfo = Pick<ICategory, "idCategoriaProductos" | "nombre">;
export interface IHomeTemplateProps {
  onClickCategory?: (props: TCategoryInfo) => void;
  onChangeSearchInput: (value: string) => void;
  onSendOrder: (orderFormInputs: IOrderFormInputs) => void;
  cartActions: Omit<ICartActions, "getTotal">;
  cartList: IProductItem[];
  totalPurchases: number;
  children?: React.ReactNode;
}
export interface IHomeTemplateChildrenProps {
  ProductList: React.FC<IProductsListProps>;
  CategoryList: React.FC<ICategoriesBarProps>;
}
