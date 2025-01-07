import { Stack } from "@mui/material";
import SearchComponent from "../../atoms/inputs/simple-search";
import OrdersTable from "../../organisms/orders-table";
import React from "react";
import { IOrderTemplateProps } from "./interface";
import OrderDetailsModal from "../../organisms/order-details-modal";
import { TOrderRow } from "../../organisms/orders-table/interface";

const OrdersTemplate: React.FC<IOrderTemplateProps> = ({
  rows,
  onSearch,
  onAccept,
  onReject,
}) => {
  const [open, setOpen] = React.useState(false);
  const [selectedOrder, setSelectedOrder] = React.useState<TOrderRow | null>(
    null
  );
  const handleSelect = (order: TOrderRow) => {
    setSelectedOrder(order);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedOrder(null);
  };
  const handleAccept = (date: string) => {
    onAccept(selectedOrder!, date);
  };
  const handleReject = () => {
    onReject(selectedOrder!);
  };
  return (
    <Stack rowGap={2}>
      <Stack
        spacing={{ xs: 2, lg: 1 }}
        direction={{ sx: "column", sm: "row", lg: "row" }}
        justifyContent="space-between"
        alignItems={{ sm: "center" }}
        paddingTop={1}
        paddingLeft={{ xs: 2, sm: 0 }}
        paddingRight={{ xs: 2, sm: 0 }}
        paddingBottom={5}
      >
        <SearchComponent
          placeholder={"Buscar por nombre"}
          paperProps={{ sx: { width: { xs: "100%", sm: 400 } } }}
          onSearch={onSearch}
        />
      </Stack>
      <OrderDetailsModal
        products={selectedOrder?.detallesOrden || []}
        open={open}
        onAccept={handleAccept}
        onClose={handleClose}
        onReject={handleReject}
      />
      <OrdersTable rows={rows} onSeeDetails={handleSelect} />
    </Stack>
  );
};

export default OrdersTemplate;
