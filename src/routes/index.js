import express from 'express'
import routerUser from './user.router.js';

const router = express.Router();

router.use('/users', routerUser)

export default router