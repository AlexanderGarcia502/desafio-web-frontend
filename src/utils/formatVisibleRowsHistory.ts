import { createData } from "../components/organisms/historyDrawer/HistoryTable";
import { IHistoryReturn } from "../components/organisms/historyDrawer/interface";
import { IOrder } from "../interfaces/models/order";
import { IOrderDetail } from "../interfaces/models/orderDetail";

const formatVisibleRowsHistory = (history: IHistoryReturn) => {
  return history.map(
    (
      item: Pick<IOrder, "idOrden" | "fecha_entrega" | "total_orden"> & {
        estado: string;
        detalles: Array<
          Pick<IOrderDetail, "precio" | "cantidad" | "subtotal"> & {
            nombre: string;
          }
        >;
      },
      index: number
    ) => {
      const { fecha_entrega, total_orden, detalles, estado } = item;

      return createData(
        `Orden ${index + 1}`,
        String(fecha_entrega),
        estado,
        total_orden,
        detalles.map((detalle) => ({
          name: detalle.nombre,
          quantity: detalle.cantidad,
          price: detalle.precio,
          subtotal: detalle.subtotal,
        }))
      );
    }
  );
};

export default formatVisibleRowsHistory;
