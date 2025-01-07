import { useQuery } from "@tanstack/react-query";
import OrdersTemplate from "../components/templates/orders";
import { OrderServices } from "../services/order-services";
import { IOrderWithDetails } from "../services/interfaces/order-interface";

const OrdersPage = () => {
  const orderServices = new OrderServices();
  const { data: orderList = [] } = useQuery({
    queryKey: ["orderWithDetails"],
    queryFn: async () => {
      const response = await orderServices.getAll();
      return response;
    },
  });

  const orderListMapped = orderList.map((order: IOrderWithDetails) => {
    const { nombre_completo, direccion, total_orden, detallesOrden } = order;
    return { nombre_completo, direccion, total_orden, detallesOrden };
  });

  return (
    <OrdersTemplate
      onSearch={() => {}}
      onAccept={() => {}}
      onReject={() => {}}
      rows={orderListMapped}
    ></OrdersTemplate>
  );
};

export default OrdersPage;
