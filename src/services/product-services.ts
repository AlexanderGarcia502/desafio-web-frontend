import axios from "axios";

export class ProductServices {
  async getAllProducts() {
    try {
      const { data } = await axios.get(
        "http://localhost:7000/api/product/getAll"
      );
      return data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products");
    }
  }
}
