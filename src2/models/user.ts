import { getData } from "../database";
//Crear un modelo Product con los metodos getByDescription, getById, getAll.

class Users {
  constructor() {}

  async getAll() {
    const { users } = await getData("users");
    return users;
  }

  async getById(id: number | string) {
    const users = await this.getAll();
    const searchedUser = users.find((user) => user.id == id);
    return searchedUser;
  }
  async getByEmail(email: string) {
    const users = await this.getAll();
    const searchedUser = users.find((user) => user.email == email);
    return searchedUser;
  }
}

const users = new Users().getByEmail("michael.williams@x.dummyjson.com");
//const users2 = new Product().getById(2);
