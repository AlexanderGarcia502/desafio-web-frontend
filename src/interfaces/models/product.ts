export interface IProduct {
  idProductos: number;
  nombre: string;
  precio: number;
  stock: number;
  estados_idEstados?: number;
  foto: string;
  marca?: string;
  categoriaProductos_idCategoriaProductos: number;
}
