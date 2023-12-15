import { Router } from 'express';
import * as authController from './auth.controller.js';
import { asyncHandler } from '../../utils/asyncHandler.js';

const router = Router();
router.post('/sign-up', asyncHandler(authController.signup));
router.get('/confirm-email/:token', asyncHandler(authController.confirmEmail));
router.post('/sign-in', asyncHandler(authController.signin));
router.patch('/send-code', asyncHandler(authController.sendForgotCode));
router.patch('/forgot-password', asyncHandler(authController.forgotPassword));
export default router;
