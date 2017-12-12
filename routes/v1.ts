import * as express from 'express';
import { getUserById, createUser, updateUser, deleteUser, livenessProbe, readinessProbe } from '../controllers/UserController';

export default (app) => {

  // api routes
  const apiRoutes = express.Router();
  const userRoutes = express.Router();

  /********************************
  === user endpoints
  ********************************/

  // append user routes to api routes
  apiRoutes.use('/users', userRoutes);

  // get user by id
  userRoutes.get('/:id', getUserById);

  // create user
  userRoutes.post('/', createUser);

  // update user by id
  userRoutes.put('/:id', updateUser);

  // delete user by id
  userRoutes.delete('/:id', deleteUser);

  // kubernetes readinessProbe
  apiRoutes.get('/readiness', readinessProbe);

  // kubernetes livenessProbe
  apiRoutes.get('/healthz', livenessProbe);

  // kubernetes livenessProbe
  apiRoutes.post('/kaka', createUser);

  /********************************
  === append apiRoutes to app
  ********************************/

  app.use('/api/v1', apiRoutes);

};