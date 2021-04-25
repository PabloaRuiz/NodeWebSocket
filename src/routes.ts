import { Router } from 'express';
import { MessagesController } from './controllers/MessagesController';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

//POST
routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create)
routes.post("/messages", messagesController.create);

//GET
routes.get("/messages/:id", messagesController.showByUser);
routes.get("/settings/:username", settingsController.findByUsername);


// PUT 
routes.put("/settings/:username", settingsController.update);



export { routes };