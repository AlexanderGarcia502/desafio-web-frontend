import api from "../axios";
import { IProduct } from "../interfaces/models/product";

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
  async deleted({ idProductos }: Pick<IProduct, "idProductos">) {
    try {
      const { data } = await api.delete("/product/", {
        data: { idProductos },
      });

      return data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products");
    }
  }
  async update(formData: any) {
    try {
      const { data } = await api.put("/product/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products");
    }
  }
}
