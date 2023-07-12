import languageRoutes from './languagesRoute.js'
import submissionRoutes from './submissionRoute.js'
import express from 'express';

const router = express.Router();


router.use('/languages', languageRoutes)
router.use('/submissions', submissionRoutes)



export default router;