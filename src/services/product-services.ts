import api from "../axios";

export class ProductServices {
  async getAllProducts() {
    try {
      const { data } = await api.get("/product/getAll");
      return data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products");
    }
  }
}
