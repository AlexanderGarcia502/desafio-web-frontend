export interface IOrder {
  usuarios_idUsuarios: number;
  estados_idEstados?: number;
  nombre_completo: string;
  direccion: string;
  telefono: string;
  correo_electronico: string;
  fecha_entrega: Date;
  total_orden: number;
}
