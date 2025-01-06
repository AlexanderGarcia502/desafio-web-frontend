import { IOrderDetail } from "./orderDetail";

export interface IOrder {
  usuarios_idUsuarios: number;
  estados_idEstados?: number;
  nombre_completo: string;
  direccion: string;
  telefono: string;
  correo_electronico: string;
  fecha_entrega: string;
  total_orden: number;
  orderDetails: IOrderDetail[];
}
