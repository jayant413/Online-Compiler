import languageRoutes from './languagesRoute.js'
import submissionRoutes from './submissionRoute.js'
import authRoutes from './authRoute.js'
import express from 'express';

const router = express.Router();


router.use('/languages', languageRoutes)
router.use('/submissions', submissionRoutes)
router.use('/auth', authRoutes)


export default router;