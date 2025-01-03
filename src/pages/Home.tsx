import HomeTemplate from "../components/templates/home";
import { TCategoryInfo } from "../components/templates/home/interface";
const categories: TCategoryInfo[] = [
  { idCategoriaProductos: 1, nombre: "Todos" },
  { idCategoriaProductos: 1, nombre: "Alimentos y Bebidas" },
  {
    idCategoriaProductos: 1,
    nombre: "Productos de Limpieza",
  },
  { idCategoriaProductos: 1, nombre: "Cuidado de Mascotas" },
  { idCategoriaProductos: 1, nombre: "Farmacia y Salud" },
  { idCategoriaProductos: 1, nombre: "Alimentos Congelados" },
];
const HomePage = () => {
  return (
    <HomeTemplate categories={categories} onClickCategory={() => {}}>
      <HomeTemplate.CategoryList
        categories={categories}
        onChangeCategory={() => {}}
      />
      <HomeTemplate.ProductList
        products={[{ nombre: "Jabon", precio: 2.54 }]}
      />
    </HomeTemplate>
  );
};

export default HomePage;
