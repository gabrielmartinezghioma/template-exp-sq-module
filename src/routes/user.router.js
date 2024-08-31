import express from 'express';
import { getAll, create, getOne, remove, update } from '../controllers/user.controllers.js';

const routerUser = express.Router();

routerUser.route('/')
  .get(getAll)
  .post(create);

routerUser.route('/:id')
  .get(getOne)
  .delete(remove)
  .put(update);

export default routerUser;