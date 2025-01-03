import { Roles } from "../interfaces/enums/roles";

export const getInitialRouteByRole = (role: Roles) => {
  if (role === Roles.Admin || role === Roles.Operator) {
    return "/management";
  }
  if (role === Roles.Client) {
    return "/";
  }
  return "/";
};
