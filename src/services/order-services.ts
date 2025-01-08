import api from "../axios";
import {
  ICreateOrderProps,
  IDecideOrderProps,
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
    detallesOrden,
  }: ICreateOrderProps) {
    try {
      const { data } = await api.post("/order/", {
        usuarios_idUsuarios,
        nombre_completo,
        direccion,
        telefono,
        correo_electronico,
        fecha_entrega,
        productsDetails: detallesOrden,
      });
      return data.data;
    } catch (error: any) {
      console.log("ERRR: ", error);
      throw new Error(handleError(error));
    }
  }
  async getAll() {
    try {
      const { data } = await api.get("/order/getAll/");
      return data.data;
    } catch (error) {
      throw new Error(handleError(error));
    }
  }
  async decideOrder({ idOrden, fecha_entrega, estado }: IDecideOrderProps) {
    try {
      const { data } = await api.post("/order/decideOrder", {
        idOrden,
        fecha_entrega,
        estado,
      });
      return data.data;
    } catch (error) {
      throw new Error(handleError(error));
    }
  }
}
