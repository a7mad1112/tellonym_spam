import { Router } from 'express';
import * as authController from './auth.controller.js';
import { asyncHandler } from '../../utils/asyncHandler.js';

const router = Router();
router.post('/sign-up', asyncHandler(authController.signup));
router.get('/confirm-email/:token', asyncHandler(authController.confirmEmail));
router.post('/sign-in', asyncHandler(authController.signin));
export default router;
