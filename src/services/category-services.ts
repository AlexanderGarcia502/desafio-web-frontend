import axios from "axios";

export class CategoryServices {
  async getAllCategories() {
    try {
      const { data } = await axios.get("http://localhost:7000/api/category/");
      return data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products");
    }
  }
}
