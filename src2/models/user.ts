import { getData } from "../database";

class UserModel {
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

//const users = new Users().getByEmail("michael.williams@x.dummyjson.com");
//const users2 = new Product().getById(2);

const users = new UserModel();

const { getAll, getById, getByEmail } = users;

export { getAll, getById, getByEmail };
