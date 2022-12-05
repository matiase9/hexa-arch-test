import { Router} from 'express';
import Controller from './sitters.controller';

const route: Router = Router();
const controller = new Controller();

/**
 * @route GET /
 */
route.get('/', controller.findAll);

/**
 * @route POST /sitters/save
 */
route.post('/save', controller.save);

/**
 * @route GET /
 */
route.get('/remove', controller.remove);

export default route;