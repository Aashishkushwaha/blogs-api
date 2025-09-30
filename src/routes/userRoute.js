import { Router } from 'express';
import authMiddleware from '../middleware/auth.js';
import { register, login, softDelete } from '../controllers/userController.js';
import { validate } from '../middleware/validate.js';
import { loginSchema, registerSchema } from '../utils/validators/userValidator.js';

const router = Router();

router.post('/register', validate(registerSchema), register);

router.post('/login', validate(loginSchema), login);

router.delete('/me', authMiddleware, softDelete);

export default router;
