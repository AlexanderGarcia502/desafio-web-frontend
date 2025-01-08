import { useMutation, useQuery } from "@tanstack/react-query";
import OrdersTemplate from "../components/templates/orders";
import { OrderServices } from "../services/order-services";
import {
  IDecideOrderProps,
  IOrderWithDetails,
} from "../services/interfaces/order-interface";
import { useContext } from "react";
import { NotificationContext } from "../context/notification";
import { Status } from "../interfaces/enums/status";
import { TOrderRow } from "../components/organisms/orders-table/interface";

const OrdersPage = () => {
  const orderServices = new OrderServices();

  const { setOpenNotification } = useContext(NotificationContext);

  const { data: orderList = [], refetch } = useQuery({
    queryKey: ["orderWithDetails"],
    queryFn: async () => {
      const response = await orderServices.getAll();
      return response;
    },
  });

  const { mutate: decideOrder } = useMutation({
    mutationFn: async ({
      idOrden,
      fecha_entrega,
      estado,
    }: IDecideOrderProps) => {
      return orderServices.decideOrder({ idOrden, fecha_entrega, estado });
    },
    onSuccess: (message) => {
      refetch();
      setOpenNotification(message, "success");
    },
    onError: (err) => {
      setOpenNotification(err.message, "error");
    },
  });

  const orderListMapped = orderList.map((order: IOrderWithDetails) => {
    const {
      nombre_completo,
      direccion,
      total_orden,
      detallesOrden,
      idOrden,
      estado,
    } = order;
    return {
      nombre_completo,
      direccion,
      total_orden,
      detallesOrden,
      idOrden,
      estado,
    };
  });

  const onAccept = (order: TOrderRow, date: string) => {
    const { idOrden } = order;
    decideOrder({
      idOrden,
      fecha_entrega: date,
      estado: Status.Accept,
    });
  };

  const onReject = ({ idOrden }: TOrderRow) => {
    decideOrder({
      idOrden,
      fecha_entrega: null,
      estado: Status.Reject,
    });
  };

  return (
    <OrdersTemplate
      onSearch={() => {}}
      onAccept={onAccept}
      onReject={onReject}
      rows={orderListMapped}
    ></OrdersTemplate>
  );
};

export default OrdersPage;
