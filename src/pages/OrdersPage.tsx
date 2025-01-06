import OrdersTemplate from "../components/templates/orders";

const OrdersPage = () => {
  return (
    <OrdersTemplate
      onSearch={() => {}}
      onAccept={() => {}}
      onReject={() => {}}
      rows={[]}
    ></OrdersTemplate>
  );
};

export default OrdersPage;
