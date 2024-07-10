//Implementa un controlador para manejar la obtención de clientes y productos.

//el server le pide al controlador q busque en model de productos o en el de users lo q necesita y lo devuelva

import { getAll, getById, getByDescription } from "../models/product"; //pero son metodos de una clase entonces no se importarlo
import { getByEmail, getAll, getById } from "../models/user";
