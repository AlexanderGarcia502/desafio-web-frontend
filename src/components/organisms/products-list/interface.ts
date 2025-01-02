import { IProduct } from "../../../interfaces/models/product";

export interface IProductsListProps {
    products: Pick<IProduct, 'nombre' | 'precio'>[];
}