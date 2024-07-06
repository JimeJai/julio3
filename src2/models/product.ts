import { getData } from "../database";
//Crear un modelo Product con los metodos getByDescription, getById, getAll.

class Product {
  constructor() {}

  async getAll() {
    const { products } = await getData("products");
    return products;
  }

  async getById(id: number | string) {
    const products = await this.getAll();
    const searchedProduct = products.find((product) => product.id == id);
    return searchedProduct;
  }
  async getByDescription(description: string) {
    const products = await this.getAll();
    const searchedDescription = products.filter((product) =>
      product.description.includes(description)
    );
    return searchedDescription;
  }
}

const products = new Product().getByDescription("is a");
//const products2 = new Product().getById(2);
