import { useQuery } from "@tanstack/react-query";
import HomeTemplate from "../components/templates/home";
import { CategoryServices } from "../services/category-services";

const HomePage = () => {
  const categoryServices = new CategoryServices();

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await categoryServices.getAllCategories();
      return response;
    },
  });

  const allCategories = [
    { idCategoriaProductos: 0, nombre: "Todos" },
    ...categories,
  ];

  return (
    <HomeTemplate categories={[]} onClickCategory={() => {}}>
      <HomeTemplate.CategoryList
        categories={allCategories}
        onChangeCategory={(props) => {
          console.log("first: ", props);
        }}
      />
      <HomeTemplate.ProductList
        products={[{ nombre: "Jabon", precio: 2.54 }]}
      />
    </HomeTemplate>
  );
};

export default HomePage;
