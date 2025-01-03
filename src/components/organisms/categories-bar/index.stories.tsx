import LoginSection from ".";
import { fn } from "@storybook/test";
export const ActionsData = {
  onChangeCategory: fn(),
};

export default {
  component: LoginSection,
  title: "Categories Bar",
  tags: ["autodocs"],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
    categories: [
      { idCategoriaProductos: 1, nombre: "Todos" },
      { idCategoriaProductos: 1, nombre: "Alimentos y Bebidas" },
      {
        idCategoriaProductos: 1,
        nombre: "Productos de Limpieza",
      },
      { idCategoriaProductos: 1, nombre: "Cuidado de Mascotas" },
      { idCategoriaProductos: 1, nombre: "Farmacia y Salud" },
      { idCategoriaProductos: 1, nombre: "Alimentos Congelados" },
    ],
  },
};
