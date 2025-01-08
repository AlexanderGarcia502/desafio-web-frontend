import { IOrderDetail } from "./orderDetail";

export interface IOrder {
  idOrden?: number;
  usuarios_idUsuarios: number;
  estados_idEstados?: number;
  nombre_completo: string;
  direccion: string;
  telefono: string;
  correo_electronico: string;
  fecha_entrega: Date | null | string;
  total_orden: number;
  detallesOrden: Omit<
    IOrderDetail,
    "orden_idOrden" | "producto" | "subtotal"
  >[];
}
