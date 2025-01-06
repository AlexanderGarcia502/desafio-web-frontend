import React from "react";
import { Outlet } from "react-router-dom";
import { useProtectedRoute } from "../../hooks/useProtectedRoute";
import ManagmentNavbar from "../organisms/managment-navbar";
import { useManagmentMenuList } from "../../hooks/useManagmentMenuList";

interface ManagmentLayoutProps {
  allowedRoles?: string[];
}

const ManagmentLayout: React.FC<ManagmentLayoutProps> = ({ allowedRoles }) => {
  const items = useManagmentMenuList();
  useProtectedRoute(allowedRoles);

  return (
    <div>
      <ManagmentNavbar items={items}>
        <Outlet />
      </ManagmentNavbar>
    </div>
  );
};

export default ManagmentLayout;
