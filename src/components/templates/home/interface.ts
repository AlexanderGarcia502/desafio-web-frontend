import React from "react";
import { IProductsListProps } from "../../organisms/products-list/interface";

export interface IHomeTemplateProps {

    children?: React.ReactNode;
}
export interface IHomeTemplateChildrenProps{
    ProductList: React.FC<IProductsListProps>
}