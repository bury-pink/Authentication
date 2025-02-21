import express from 'express';
import { signIn, signUp, signOut, getUser, verifyUser } from '../controllers/auth.js';;
import { isAuth } from '../middleware/isAuth.js';

const router = express.Router();

router.post('/sign-in', signIn);
router.post('/sign-up', signUp);
router.post('/sign-out', isAuth, signOut);
router.get('/user', isAuth, getUser);
router.post('/verify', verifyUser);

export default router;