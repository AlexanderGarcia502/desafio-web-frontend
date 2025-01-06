import api from "../axios";
import {
  ICreateOrderProps,
  IOrderServicesProps,
} from "./interfaces/order-interface";
import { handleError } from "../utils/handleError";

export class OrderServices implements IOrderServicesProps {
  async create({
    usuarios_idUsuarios,
    nombre_completo,
    direccion,
    telefono,
    correo_electronico,
    fecha_entrega,
    productsDetails,
  }: ICreateOrderProps) {
    try {
      const { data } = await api.post("/order/", {
        usuarios_idUsuarios,
        nombre_completo,
        direccion,
        telefono,
        correo_electronico,
        fecha_entrega,
        productsDetails,
      });
      return data.data;
    } catch (error: any) {
      throw new Error(handleError(error));
    }
  }
}
