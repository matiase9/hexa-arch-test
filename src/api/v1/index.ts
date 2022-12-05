import { Router } from 'express';
import sitters from './sitters/infrastructure/sitters.route';

const router: Router = Router();

router.use('/sitters', sitters)

export default router;