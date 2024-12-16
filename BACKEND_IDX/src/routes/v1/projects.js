import express from 'express';
import { createProjectController } from '../../controllers/projectController';

const router = express.Router();

router.post('/',createProjectController);

export default router ;