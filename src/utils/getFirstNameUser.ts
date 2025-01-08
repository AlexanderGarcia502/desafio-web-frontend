import { getUser } from "./getUser";

const getFirstNameUser = () => {
  const { nombre_completo } = getUser();

  return nombre_completo.split(" ")[0];
};

export default getFirstNameUser;
