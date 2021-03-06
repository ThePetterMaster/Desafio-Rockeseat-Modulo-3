import {Router}from'express';
import User from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController'
import authMiddleware from './app/middlewares/auth';
import RecipientController from './app/controllers/RecipientController'

const routes=new Router();



routes.post('/sessions',SessionController.store);
routes.use(authMiddleware);
routes.post('/recipients',RecipientController.store);
export default routes;