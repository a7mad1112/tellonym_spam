import { Router } from 'express';
import * as authController from './auth.controller.js';
import { asyncHandler } from '../../utils/asyncHandler.js';

const router = Router();
router.post('/sign-up', asyncHandler(authController.signup));

export default router;
