import axios from "axios";
import {
  ICreateOrderProps,
  IOrderServicesProps,
} from "./interfaces/order-interface";

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
      const { data } = await axios.post("http://localhost:7000/api/order/", {
        usuarios_idUsuarios,
        nombre_completo,
        direccion,
        telefono,
        correo_electronico,
        fecha_entrega,
        productsDetails,
      });
      return data.data;
    } catch (error) {
      console.error("Error fetching order:", error);
      throw new Error("Failed to fetch order");
    }
  }
}
