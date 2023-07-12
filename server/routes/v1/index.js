import languageRoutes from './languagesRoute.js'
import express from 'express';

const router = express.Router();


router.use('/languages', languageRoutes)



export default router;