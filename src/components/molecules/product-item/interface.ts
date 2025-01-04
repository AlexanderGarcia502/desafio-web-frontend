export interface IProductItem {
  idProduct: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

export interface IProductItemProps extends Omit<IProductItem, "idProduct"> {
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}
