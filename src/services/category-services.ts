import api from "../axios";

export class CategoryServices {
  async getAllCategories() {
    try {
      const { data } = await api.get("/category/");
      return data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products");
    }
  }
}
