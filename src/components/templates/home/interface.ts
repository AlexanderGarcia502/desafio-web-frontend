import React from "react";
import { IProductsListProps } from "../../organisms/products-list/interface";
import { ICategory } from "../../../interfaces/models/category";
import { ICategoriesBarProps } from "../../organisms/categories-bar/interface";

export type TCategoryInfo = Pick<ICategory, "idCategoriaProductos" | "nombre">;
export interface IHomeTemplateProps {
  categories: TCategoryInfo[];
  onClickCategory?: (props: TCategoryInfo) => void;
  children?: React.ReactNode;
}
export interface IHomeTemplateChildrenProps {
  ProductList: React.FC<IProductsListProps>;
  CategoryList: React.FC<ICategoriesBarProps>;
}
