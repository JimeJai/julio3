import { getAll, getById, getByDescription } from "../models/product";
import { Messages } from "../utils/messages";

class ProductController {
  async getAll() {
    return await getAll();
  }
  async getById(id: number | string) {
    if (!id) {
      return Messages.MISSING_DATA;
    }
    return await getById(id);
  }
  async getByDescription(description: string) {
    if (!description) {
      return Messages.MISSING_DATA;
    } else if (typeof description != "string") {
      return Messages.BAD_REQUEST;
    }
    return await getByDescription(description);
  }
}

const products = new ProductController();

// Cambio el nombre del metodo para que no haya conflicto con los metodos importados de models.
// getAll es el metodo de la clase Product y allProducts es el nombre que le quiero dar para exportar.
const {
  getAll: allProducts,
  getById: idProducts,
  getByDescription: productsDescription,
} = products;

export { allProducts, idProducts, productsDescription };
