import { useQuery } from "@tanstack/react-query";
import { ProductServices } from "../services/product-services";

export const useGetProducts = () => {
  const productServices = new ProductServices();
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await productServices.getAllProducts();
      return response;
    },
  });
  return {
    products,
  };
};
